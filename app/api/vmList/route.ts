import { NextResponse } from "next/server";
import { handleErrorMessage } from "@/utils/error_handling";

export async function GET(request: Request) {
    try {
        const ownerData = {
            owner: "harsha.joshi@gmail.com",
        };

        const response = await fetch(`http://10.230.16.157:24001/instances?owner=${ownerData.owner}`, {
            method: "GET",
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
