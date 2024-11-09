import { verifyAccess } from "@vercel/flags";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get("Authorization"));
  if (!access) return NextResponse.json(null, { status: 401 });

    return NextResponse.json({ hasAccess: true }, { status: 200 });
}