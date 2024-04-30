import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, sshKey } = await request.json();

    const sshData = {
      email,
      sshKey,
    };

    const response = await fetch(`${process.env.API_BASE_URL}/requestvm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sshData),
    });

    if (response.status === 200) {
      const result = await response.json();
      return NextResponse.json(result);
    } else {
      console.error("An error occurred while processing your request. Status:");
      return NextResponse.json({
        message: "An error occurred while processing your request.",
      });
    }
  } catch (error) {
    console.error("Caught an error:", error);
    return NextResponse.json({
      message: "An error occurred while processing your request.",
    });
  }
}
