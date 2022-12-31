import { session } from "@/lib/session";
import { supabase } from "@/lib/supabase";
import MainPanel from "@/ui/dashboard/MainPanel";
import Sidebar from "@/ui/dashboard/sidebar/Sidebar";
import Panel from "./Panel";

async function getProperties() {
  const s = await session();

  const p = await supabase
    .from("analytics")
    .select("*")
    .eq("user_id", s.data.user?.id)
    .order("created_at", { ascending: false });

  return p.data;
}

const DashboardPage = async () => {
  const properties = await getProperties();

  return (
    <>
      <Sidebar />
      <MainPanel title="Admin">
        <Panel initialProperties={properties as any} />
      </MainPanel>
    </>
  );
};

export default DashboardPage;
