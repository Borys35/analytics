import { Database } from "@/types/supabase";
import { PropertyEvent } from "@/types/supabaseJson";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY || ""
);

export async function getProperty(id: string) {
  const { data, error } = await supabase
    .from("analytics")
    .select("*")
    .eq("id", id);

  if (error) throw error;
  if (!data) throw new Error("Property does not exist.");
  const property = data[0];

  return property;
}

export async function getEvents(id: string) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("analytics_id", id);

  if (error) throw error;
  if (!data) throw new Error("Events of the property do not exist.");
  const events = data;

  return events as unknown as PropertyEvent[];
}
