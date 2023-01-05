import { getEvents } from "@/lib/supabase";
import Panel from "./Panel";

const GraphsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const events = await getEvents(id);

  return <Panel initialEvents={events} id={id} />;
};

export default GraphsPage;
