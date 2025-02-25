import { NextResponse } from "next/server";
import { GAMES } from "@/lib/mock/games";
import { StatusCodes } from "http-status-codes";

export function GET() {
  return NextResponse.json(GAMES, { status: StatusCodes.OK });
}
