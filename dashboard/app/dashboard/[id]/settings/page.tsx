import { getProperty } from "@/lib/supabase";
import Panel from "./Panel";

const SettingsPage = async ({ params }: { params: { id: string } }) => {
  const property = await getProperty(params.id);

  return <Panel property={property} />;
};

export default SettingsPage;
