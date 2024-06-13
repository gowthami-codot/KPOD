import { NextResponse } from "next/server";
import { signup } from "@/utils/auth_server";
import axios from "axios";
import { handleErrorMessage } from "@/utils/error_handling";

export async function POST(request: Request) {
    const { firstName, lastName, email, password, accountType, userProfile, profileLink, token } = await request.json();

    const signupData = {
        firstName,
        lastName,
        email,
        password,
        accountType,
        userProfile,
        profileLink,
    };
    //console.log(token);

    if (process.env.PREPROD !== "true") {        
        try {
            var secret = "6LdLoM0pAAAAABhymKqiWLfIXfMTWUIPCkqymJsj";
            const resp = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
                {}
            );

            //console.log(resp);

            if (!resp.data.success) {
                return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
            }
        } catch (err) {
            return handleErrorMessage({ error: new Error(), customMessage: "Captcha error", customStatusCode: 500 });
        }
    } else {
        console.log("Skip recaptcha...");
    }

    let response;
    try {
        response = await fetch(`${process.env.API_BASE_URL}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupData),
        });
    } catch (error) {
        return handleErrorMessage({ error });
    }

    if (response.status === 409) {
        const result = await response.json();
        return NextResponse.json(result, { status: 409 });
    } else if (response.ok) {
        try {
            //iam start
            await signup(email, email, password, firstName, lastName);
            //iam end
            const verificationData = {
                email,
                mailTemplate: "registration",
            };

            const response = await fetch(`${process.env.API_BASE_URL}/sendmail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(verificationData),
            });

            if (response.status !== 200) {
                console.error(response.statusText);
                return NextResponse.json({ message: response.statusText }, { status: response.status });
            }
            return NextResponse.json({ message: "Signup successful" }, { status: 200 });
        } catch (error) {
            console.error(error);
            return handleErrorMessage({ error });
        }
    } else {
        console.error(response.statusText);
        return NextResponse.json({ message: response.statusText }, { status: response.status });
    }
}
