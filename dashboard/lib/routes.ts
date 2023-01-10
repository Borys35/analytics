import { redirect } from "next/navigation";
import { session } from "./session";

export async function privateRoute(redirectTo?: string) {
  const r = () => redirect(redirectTo || "/sign-up");
  try {
    const { data, error } = await session();

    if (error) throw error;

    if (!data.session) r();
  } catch (e: unknown) {
    console.error(`This private route is forbidden. ${e}`);
    r();
  }
}

export async function publicOnlyRoute(redirectTo?: string) {
  const r = () => redirect(redirectTo || "/");
  try {
    const { data, error } = await session();

    if (error) throw error;

    if (!!data.session) r();
  } catch (e: unknown) {
    console.error(`This public-only route is forbidden. ${e}`);
    r();
  }
}
