/* eslint-disable @typescript-eslint/no-unused-vars */
import { getSession } from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    await (await cookies()).getAll();
    const session = await getSession();
    
    if (!session || !session.idToken) {
      return NextResponse.json(
        { error: "No valid session found" },
        { status: 401 }
      );
    }
    
    return NextResponse.json({ accessToken: session.idToken });
  } catch (error) {
    console.error("Error fetching token:", error);
    return NextResponse.json(
      { error: "Failed to retrieve token" },
      { status: 500 }
    );
  }
}