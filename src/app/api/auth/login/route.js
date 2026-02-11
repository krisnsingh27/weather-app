import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import  connectDB  from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

 const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
 

const cookieStore = await cookies();
cookieStore.set("token", token, {
  httpOnly: true,
  path: "/",
});

return NextResponse.json({ message: "Logged in successfully" });
}
