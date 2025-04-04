import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req) {
  const { email, password, name } = await req.json();

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password and create the user
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({ // Corrected model name
      data: {
        email,
        password: hashedPassword,
        name,
        role: "USER", // Default role for new users
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
