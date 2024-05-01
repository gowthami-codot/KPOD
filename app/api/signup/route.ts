import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      accountType,
      userProfile,
      profileLink,
    } = await request.json();

    const signupData = {
      firstName,
      lastName,
      email,
      password,
      accountType,
      userProfile,
      profileLink,
    };

    const response = await fetch(`${process.env.API_BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    if (response.status === 409) {
      const result = await response.json();
      return NextResponse.json(result);
    } else if (response.ok) {

      try {
        const verificationData = {
          email,
          "mailTemplate": "registration"
        };

        const response = await fetch(`${process.env.API_BASE_URL}/sendmail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(verificationData),
        });

        if (response.status === 200) {
          return NextResponse.json({ message: "Signup successful" });
        } else {
          console.error("An error occurred while processing your request. Status:");
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




    } else {
      return NextResponse.json({
        message: "An error occurred while processing your request.",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "An error occurred while processing your request.",
    });
  }
}
