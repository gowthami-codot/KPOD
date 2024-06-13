import { NextResponse } from "next/server";
import { getUserInfo } from "@/utils/auth_server";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    try {
        var userInfo = await getUserInfo();
        return NextResponse.json(userInfo, { status: 200 });
    } catch (error) {
        return handleErrorMessage({ error });
    }
}
