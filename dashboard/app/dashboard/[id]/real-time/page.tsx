import { supabase } from "@/lib/supabase";
import { PropertyEvent } from "@/types/supabaseJson";
import Panel from "./Panel";

async function getInitialEvents(id: string) {
  const { data } = await supabase
    .from("analytics")
    .select("events")
    .eq("id", id);

  if (!data) throw new Error("No analytics with this ID found.");

  return data[0].events;
}

const RealTimePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const initialEvents = await getInitialEvents(id);

  return (
    <Panel
      id={id}
      initialEvents={initialEvents as unknown as PropertyEvent[]}
    />
  );
};

export default RealTimePage;
