// import { NextResponse } from "next/server";
// import { handleErrorMessage } from "../../../utils/error_handling";

// export async function DELETE(request: Request) {
//   try {
//     const { instanceId } = await request.json();

//     const response = await fetch(
//       `http://10.230.16.157:24001/instances/${instanceId}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.status === 204) {
//       return new Response(null, { status: 204 });
//     } else if (response.status === 404) {
//       return NextResponse.json({ message: "Not Found" }, { status: 404 });
//     } else {
//       console.error(response.statusText);
//       return NextResponse.json(
//         { message: response.statusText },
//         { status: response.status }
//       );
//     }
//   } catch (error) {
//     return handleErrorMessage({ error });
//   }
// }
