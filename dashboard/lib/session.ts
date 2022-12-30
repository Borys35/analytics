import { cookies } from "next/headers";
import { supabase } from "./supabase";

type Session = Awaited<ReturnType<typeof supabase.auth.setSession>>;

export async function session(): Promise<Session> {
  const nextCookies = cookies();
  const refreshToken = nextCookies.get("my-refresh-token")?.value;
  const accessToken = nextCookies.get("my-access-token")?.value;

  if (refreshToken && accessToken) {
    const session = await supabase.auth.setSession({
      refresh_token: refreshToken,
      access_token: accessToken,
    });

    return session;
  } else {
    // make sure you handle this case!
    throw new Error("User's not authenticated");
  }
}
