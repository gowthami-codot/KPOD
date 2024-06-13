import { NextResponse } from "next/server";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    const url = new URL(request.url);
    let token = url.searchParams.get("token");

    try {
        if (!process.env.API_BASE_URL) {
            console.error("API_BASE_URL is not set");
            return handleErrorMessage({
                error: new Error(),
                customMessage: "API_BASE_URL is not set",
                customStatusCode: 500,
            });
        }

        const response = await fetch(`${process.env.API_BASE_URL}/verifymail?token=${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status !== 200) {
            console.error(response.statusText);
            return NextResponse.json({ message: response.statusText }, { status: response.status });
        }

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        return handleErrorMessage({ error });
    }
}
