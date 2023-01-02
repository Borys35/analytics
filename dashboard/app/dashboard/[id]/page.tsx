import { supabase } from "@/lib/supabase";
import StatsList from "./StatsList";

export const dynamic = "force-dynamic",
  fetchCache = "only-no-store";

async function getProperty(id: string) {
  const { data } = await supabase.from("analytics").select("*").eq("id", id);

  if (!data) throw new Error("Property does not exist.");
  const property = data[0];

  return property;
}

const PropertyPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const property = await getProperty(id);

  return <StatsList initialProperty={property} />;
};

export default PropertyPage;
