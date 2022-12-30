import { publicOnlyRoute } from "@/lib/routes";

export const dynamic = "force-dynamic";

const SignInLayout = async ({ children }: { children: React.ReactNode }) => {
  await publicOnlyRoute("/dashboard");

  return children;
};

export default SignInLayout;
