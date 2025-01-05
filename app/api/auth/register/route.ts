import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { User } from "@/app/models/user.model";
import { Verification } from "@/app/models/verification.model";
import connectDB from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Create verification token
    const token = crypto.randomBytes(32).toString('hex');
    await Verification.create({
      token,
      userId: user._id,
      type: 'email',
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    });

    // Send verification email
    await sendVerificationEmail(email, token);

    return new NextResponse("User registered successfully");
  } catch (error) {
    console.error("Registration error:", error);
    return new NextResponse("Error registering user", { status: 500 });
  }
}
