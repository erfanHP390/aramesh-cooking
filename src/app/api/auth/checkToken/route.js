import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const refresh = cookieStore.get("refresh-token");

  if (token) {
    return Response.json(
      { message: "valid" },
      { status: 200 }
    );
  } else if (!token && refresh) {
    return Response.json(
      { message: "need_refresh" },
      { status: 200 }
    );
  } else {
    return Response.json(
      { message: "unauthenticated" },
      { status: 200 }
    );
  }
}
