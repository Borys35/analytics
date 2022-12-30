import { redirect } from "next/navigation";
import { session } from "./session";

export async function privateRoute(redirectTo?: string) {
  const r = () => redirect(redirectTo || "/sign-up");
  try {
    const { data, error } = await session();

    if (!data.session) r();
  } catch {
    console.error("This route is forbidden.");
    r();
  }
}

export async function publicOnlyRoute(redirectTo?: string) {
  const r = () => redirect(redirectTo || "/");
  try {
    const { data, error } = await session();

    if (!!data.session) r();
  } catch {
    console.error("This route is forbidden.");
    r();
  }
}
