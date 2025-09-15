import sleep from "@/lib/sleep";
import { NextResponse } from "next/server";

export async function GET() {
  await sleep(5000);
  return NextResponse.json({ message: "Slept for 5 seconds" });
}
