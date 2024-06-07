import middleware, {
  NextRequestWithAuth,
  withAuth,
} from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req: NextRequestWithAuth) {
  if (
    req.nextUrl.pathname.startsWith("/agent") &&
    req.nextauth.token?.role !== "agent"
  ) {
    return NextResponse.rewrite("/");
  }
});

export const config = {
  matcher: ["/agent"],
};
