import sleep from "@/lib/sleep";
import { NextResponse } from "next/server";

export async function GET() {
  await sleep(2000);
  const random = Math.floor(Math.random() * 6);
  return NextResponse.json({ name: `John Doe-${random}`, age: 30 });
}
