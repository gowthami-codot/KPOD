import { NextResponse } from "next/server";
import { getUserInfo } from "@/utils/auth_server";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    try {
        const userInfo = await getUserInfo();
        var email = userInfo.email;
        const { sshKey } = await request.json();

        const sshData = {
            email: email,
            sshKey,
        };

        const response = await fetch(`${process.env.API_BASE_URL}/requestvm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sshData),
        });

        if (response.status !== 200) {
            console.error(response.statusText);
            return NextResponse.json({ message: response.statusText }, { status: response.status });
        }

        const result = await response.json();
        const user = { email, vmInstanceRequest: result.vmInstanceRequest };

        const verificationData = {
            email,
            mailTemplate: "selection",
        };

        const mailResponse = await fetch(`${process.env.API_BASE_URL}/sendmail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(verificationData),
        });

        if (mailResponse.status !== 200) {
            console.error(mailResponse.statusText);
            return NextResponse.json({ message: mailResponse.statusText }, { status: mailResponse.status });
        }

        return NextResponse.json(user);
    } catch (error) {
        return handleErrorMessage({ error });
    }
}
