// import { NextResponse } from "next/server";
// import { getUserInfo } from "@/utils/auth_server";
// import { handleErrorMessage } from "@/utils/error_handling";

// export async function POST(request: Request) {
//     try {
//         var userInfo = await getUserInfo();
//         var email = userInfo.email;
//         console.log(email);

//         const sshData = {
//             email,
//         };

//         const response = await fetch(`${process.env.API_BASE_URL}/requestmaas`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(sshData),
//         });

//         if (response.status !== 200) {
//             console.error(response.statusText);
//             return NextResponse.json({ message: response.statusText }, { status: response.status });
//         }
//         const result = await response.json();
//         const user = { email, maasRequest: result.maasRequest };

//         const requestData = {
//             email,
//             mailTemplate: "request_maas",
//         };

//         const mailResponse = await fetch(`${process.env.API_BASE_URL}/sendmail`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(requestData),
//         });

//         if (mailResponse.status !== 200) {
//             console.error(mailResponse.statusText);
//             return NextResponse.json({ message: mailResponse.statusText }, { status: mailResponse.status });
//         }

//         return NextResponse.json(user);
//     } catch (error) {
//         console.error("Caught an error:", error);
//         return handleErrorMessage({ error });
//     }
// }
