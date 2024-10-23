import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const user = await prisma.user.findMany();
  return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prisma.user.create({
    data: {
      fullName: data.fullName,
      password: data.password,
      email: data.email,
      verified: new Date(),
    },
  });

  return NextResponse.json(user);
}
