import { NextRequest, NextResponse } from "next/server";
import { PLAYERS } from "@/lib/mock/players";
import { PlayerUsernameType } from "@/lib/types";
import { StatusCodes } from "http-status-codes";

export async function POST(request: NextRequest) {
  const { username } = (await request.json()) as {
    username: PlayerUsernameType;
  };

  if (username in PLAYERS) {
    const response = NextResponse.json(
      { status: "success" },
      { status: StatusCodes.OK },
    );
    return response;
  } else {
    return NextResponse.json(
      { error: "player does not exist" },
      { status: StatusCodes.FORBIDDEN },
    );
  }
}
