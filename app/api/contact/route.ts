import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConfig } from "@/app/utils/dbConfig";
import Agent from "@/app/utils/model/agentModel";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();
    const { name, email, password } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const agent = await Agent.create({
      name,
      email,
      password: hashed,
    });

    return NextResponse.json({
      message: "creating Agent successful",
      status: 201,
      data: agent,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error creating Agent",
      status: 404,
    });
  }
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();

    const agent = await Agent.find();

    return NextResponse.json({
      message: "creating contact successful",
      status: 201,
      data: agent,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error creating Agent",
      status: 404,
    });
  }
};
