import { NextResponse } from "next/server";
import { updatePassword } from "@/utils/auth_server";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    try {
        const { password, token } = await request.json();

        const resetPasswordData = {
            password: password,
            UserToken: token,
        };

        const response = await fetch(`${process.env.API_BASE_URL}/resetPassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resetPasswordData),
        });

        if (response.status !== 200) {
            console.error(response.statusText);
            return NextResponse.json({ message: response.statusText }, { status: response.status });
        }
        const result = await response.json();
        const email = result.email;
        //iam start
        await updatePassword(email, password);
        //iam end

        return NextResponse.json(result);
    } catch (error) {
        return handleErrorMessage({ error });
    }
}
