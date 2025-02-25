import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { CATEGORIES } from "@/lib/mock/categories";

export function GET() {
  return NextResponse.json(CATEGORIES, { status: StatusCodes.OK });
}
