import { NextResponse } from "next/server";
import { login } from "@/utils/auth_server";
import axios from "axios";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    try {
        const { email, password, token } = await request.json();

        const signinData = {
            email,
            password,
        };

        console.log(process.env.PREPROD);        

        if (process.env.PREPROD !== "true") {
            var secret = "6LdLoM0pAAAAABhymKqiWLfIXfMTWUIPCkqymJsj";
            const resp = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
                {}
            );

            console.log(resp.data.success);

            if (!resp.data.success) {
                return NextResponse.json({ error: "Captcha Error" }, { status: 500 });
            }
        } else {
            console.log("Skip recaptcha...");
        }

        const finalData = JSON.stringify(signinData);

        console.log(process.env.API_BASE_URL);

        const response = await fetch(`${process.env.API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: finalData,
        });

        // console.log(response);

        if (response.status !== 200) {
            console.error(response.statusText);
            return handleErrorMessage({
                error: new Error(),
                customMessage: "Authentication failed. Invalid Credentials.",
                customStatusCode: 401,
            });
        }
        const result = await response.json();
        const user = {
            email: email,
            port: result.userPort,
            ip: result.userIP,
            vm_instance_request: result.vmInstanceRequest,
        };
        await login(email, password);
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return handleErrorMessage({ error });
    }
}
