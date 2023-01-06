import { getEvents, getProperty } from "@/lib/supabase";
import StatsList from "./StatsList";

export const dynamic = "force-dynamic";

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const property = await getProperty(id);
  const events = await getEvents(id);

  return <StatsList initialProperty={property} initialEvents={events} />;
};

export default PropertyPage;
