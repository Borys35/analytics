import { supabase } from "@/lib/supabase";
import { PropertyEvent } from "@/types/supabaseJson";
import Panel from "./Panel";

async function getInitialEvents(id: string) {
  const { data } = await supabase
    .from("analytics")
    .select("events")
    .eq("id", id);

  if (!data) throw new Error("No analytics with this ID found.");

  return data[0].events as unknown as PropertyEvent[];
}

const GraphsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const events = await getInitialEvents(id);

  return <Panel initialEvents={events} />;
};

export default GraphsPage;
