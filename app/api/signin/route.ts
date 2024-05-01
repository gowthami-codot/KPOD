import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const signinData = {
      email,
      password,
    };

    const finalData = JSON.stringify(signinData);

    const response = await fetch(`${process.env.API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: finalData,
    });

    if (response.status === 200) {
      const result = await response.json();
      const user = { email: email, port: result.userPort, ip: result.userIP, vm_instance_request: result.vmInstanceRequest};
      return NextResponse.json(user, { status: 200 });
    } else {
      console.error("An error occurred while processing your request Status: ", response.status);
      return NextResponse.json({
        message: "An error occurred while processing your request.",
      });
    }
  } catch (error) {
    console.error("Caught an error:", error);
    return NextResponse.json({
      message: "An error occurred while processing your request.",
    });
  }
}
