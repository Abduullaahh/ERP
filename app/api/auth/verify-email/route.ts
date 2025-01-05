import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { User } from "@/app/models/user.model";
import { Verification } from "@/app/models/verification.model";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return new NextResponse("Missing token", { status: 400 });
    }

    const verification = await Verification.findOne({ 
      token,
      type: 'email',
      expires: { $gt: new Date() }
    });

    if (!verification) {
      return new NextResponse("Invalid or expired token", { status: 400 });
    }

    await User.updateOne(
      { _id: verification.userId },
      { $set: { emailVerified: new Date() } }
    );

    await Verification.deleteOne({ _id: verification._id });

    return NextResponse.redirect(new URL("/auth/login"));
  } catch (error) {
    return new NextResponse("Error verifying email", { status: 500 });
  }
}
