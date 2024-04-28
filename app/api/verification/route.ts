"use client";
import { NextResponse } from "next/server";
import { useSearchParams } from "next/navigation";

export async function POST(request: Request) {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  try {
    const { email } = await request.json();
    const verificationData = { email };

    const response = await fetch(
      `${process.env.API_BASE_URL}/verifymail?token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verificationData),
      }
    );

    if (response.status === 200) {
      const result = await response.json();
      return NextResponse.json(result);
    } else {
      console.error(
        "An error occurred while processing your request 1. Status: ",
        response.status
      );
      return NextResponse.json({
        message: "An error occurred while processing your request. 2",
      });
    }
  } catch (error) {
    console.error("Caught an error:", error);
    return NextResponse.json({
      message: "An error occurred while processing your request. 3",
    });
  }
}
