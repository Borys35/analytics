import { publicOnlyRoute } from "@/lib/routes";

export const dynamic = "force-dynamic";

const SignUpLayout = async ({ children }: { children: React.ReactNode }) => {
  await publicOnlyRoute("/dashboard");

  return children;
};

export default SignUpLayout;
