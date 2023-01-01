import { privateRoute } from "@/lib/routes";

export const dynamic = "force-dynamic";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  await privateRoute();

  return (
    <div className={`py-4 px-6 min-h-screen max-w-screen-2xl flex gap-4`}>
      {children}
    </div>
  );
};

export default DashboardLayout;
