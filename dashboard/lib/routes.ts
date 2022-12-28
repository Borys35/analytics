import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseClient } from "./supabase";

export async function privateRoute(redirectTo?: string) {
  const nextCookies = cookies();
  const access_token = nextCookies.get("access_token")?.value || "";
  const refresh_token = nextCookies.get("refresh_token")?.value || "";
  const { data } = await supabaseClient.auth.setSession({
    access_token,
    refresh_token,
  });

  if (!data.session) redirect(redirectTo || "/sign-up");
}

export async function publicOnlyRoute(redirectTo?: string) {
  const nextCookies = cookies();
  const access_token = nextCookies.get("access_token")?.value || "";
  const refresh_token = nextCookies.get("refresh_token")?.value || "";
  const { data } = await supabaseClient.auth.setSession({
    access_token,
    refresh_token,
  });

  if (!!data.session) redirect(redirectTo || "/");
}
