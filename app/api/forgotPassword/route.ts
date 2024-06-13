import { NextResponse } from "next/server";
//import { getUsage } from '@/utils/auth_server';
import axios from "axios";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    try {
        const { email, token } = await request.json();

        const forgetPasswordData = {
            email,
        };

        if (process.env.PREPROD !== "true") {
            var secret = "6LdLoM0pAAAAABhymKqiWLfIXfMTWUIPCkqymJsj";
            const resp = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
                {}
            );

            //console.log(resp.data.success);

            if (!resp.data.success) {
                return handleErrorMessage({
                    error: new Error(),
                    customMessage: "Captcha error",
                    customStatusCode: 500,
                });
            }
        } else {
            console.log("Skip recaptcha...");
        }


        const resp_f = await fetch(`${process.env.API_BASE_URL}/forgotPassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(forgetPasswordData),
        });

        if (resp_f.status === 200) {
            //send reset password email
            const resetPasswordEmailData = {
                email,
                mailTemplate: "resetpassword",
            };

            const resp_s = await fetch(`${process.env.API_BASE_URL}/sendmail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(resetPasswordEmailData),
            });

            if (resp_s.status === 200) {
                const user = { email: email };
                return NextResponse.json(user, { status: 200 });
            }
        }

        console.log("Invalid email");
        return handleErrorMessage({ error: new Error(), customMessage: "Invalid email", customStatusCode: 400 });
    } catch (error) {
        return handleErrorMessage({ error });
    }
}
