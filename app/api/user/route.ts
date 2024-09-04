import { getUsers } from "@/lib/services/user/getUser";
import { createUser } from "@/lib/services/user/createUser";
import { PrismaModels } from "@/lib/types";
import { isUserExisitByEmail } from "@/lib/services/user/isUserExisitByEmail";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json("Somhing went wrong", {
      status: 500,
    });
  }
}

export async function POST(request: NextRequest) {
  let payload: PrismaModels["User"];
  try {
    payload = (await request.json()) as PrismaModels["User"];
    console.log({ payload });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "We could not create user 1",
    });
  }

  try {
    const isExist = await isUserExisitByEmail(payload.email);
    if (isExist) {
      return NextResponse.json({
        success: false,
        error: "user has already exist 2",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "We could not create user22",
    });
  }

  try {
    const response = createUser(payload);
    return NextResponse.json({
      data: response,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "We could not create user3",
    });
  }
}
