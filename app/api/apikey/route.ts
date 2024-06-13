import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { createApiKey, getApiKey, deleteApiKey } from "@/utils/auth_server";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    try {
        const { name } = await request.json();
        const { data, status } = await createApiKey(name);
        return NextResponse.json(data, { status });
    } catch (error) {
        return handleErrorMessage({ error });
    }
}

export async function GET(request: Request) {
    try {
        const { data, status } = await getApiKey();
        return NextResponse.json(data, { status });
    } catch (error) {
        return handleErrorMessage({ error });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get("uuid");
        //console.log(uuid);
        //var value = await request.json();
        //console.log(value);
        const { data, status } = await deleteApiKey(uuid);
        return NextResponse.json(data, { status });
    } catch (error) {
        return handleErrorMessage({ error });
    }
}
