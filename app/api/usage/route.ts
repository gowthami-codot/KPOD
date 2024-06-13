import { NextResponse } from "next/server";
import { getUsage } from "@/utils/auth_server";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    try {
        const { isToken, isDay, fromDate, toDate } = await request.json();
        var data = await getUsage(isToken, isDay, fromDate, toDate);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return handleErrorMessage({ error });
    }
}
