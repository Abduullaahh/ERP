import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { User } from "@/app/models/user.model";
import { Verification } from "@/app/models/verification.model";
import { hash } from "bcryptjs";
import crypto from "crypto";
import { sendPasswordResetEmail } from "@/lib/email";

// Request password reset
export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Create reset token
    const token = crypto.randomBytes(32).toString('hex');
    await Verification.create({
      token,
      userId: user._id,
      type: 'password',
      expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour
    });

    // Send reset email
    await sendPasswordResetEmail(email, token);

    return new NextResponse("Password reset email sent");
  } catch (error) {
    return new NextResponse("Error requesting password reset", { status: 500 });
  }
}

// Reset password with token
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { token, password } = await req.json();

    const verification = await Verification.findOne({
      token,
      type: 'password',
      expires: { $gt: new Date() }
    });

    if (!verification) {
      return new NextResponse("Invalid or expired token", { status: 400 });
    }

    const hashedPassword = await hash(password, 10);
    await User.updateOne(
      { _id: verification.userId },
      { $set: { password: hashedPassword } }
    );

    await Verification.deleteOne({ _id: verification._id });

    return new NextResponse("Password updated successfully");
  } catch (error) {
    return new NextResponse("Error resetting password", { status: 500 });
  }
}
