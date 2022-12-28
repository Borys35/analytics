import { Session } from "@supabase/supabase-js";

export function setCookies(
  setCookie: (n: string, v: string) => void,
  session: Session
) {
  setCookie("access_token", session.access_token);
  setCookie("refresh_token", session.refresh_token);
}
