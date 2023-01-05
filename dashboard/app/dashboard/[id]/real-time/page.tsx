import { getEvents } from "@/lib/supabase";
import { PropertyEvent } from "@/types/supabaseJson";
import Panel from "./Panel";

const RealTimePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const initialEvents = await getEvents(id);

  return (
    <Panel
      id={id}
      initialEvents={initialEvents as unknown as PropertyEvent[]}
    />
  );
};

export default RealTimePage;
