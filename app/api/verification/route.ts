import { NextResponse } from "next/server";

export async function POST(request: Request) {
 const url = new URL(request.url);
 let token = url.searchParams.get("token");

 try {
    if (!process.env.API_BASE_URL) {
      console.error("API_BASE_URL is not set");
      return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
    }

    const response = await fetch(
       `${process.env.API_BASE_URL}/verifymail?token=${token}`,
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
       }
    );

    if (response.status === 200) {
      const result = await response.json();
      return NextResponse.json(result);
    } else {
      console.error("An error occurred while processing your request. Status:", response.status);
      return NextResponse.json({
        message: "An error occurred while processing your request.",
      });
    }
 } catch (error) {
    console.error("Caught an error:", error);
    return new Response(JSON.stringify({ message: "An error occurred while processing your request." }), { status: 500 });
 }
}
