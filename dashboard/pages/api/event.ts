import { supabase } from "@/lib/supabase";
import { PropertyEventType } from "@/types/supabaseJson";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { event_type, api_key } = req.body as {
    event_type: PropertyEventType;
    api_key: string;
  };

  const { data } = await supabase
    .from("analytics")
    .select("id")
    .eq("api_key", api_key);

  if (!data) return res.status(400).send(`event adding failed.`);

  res.status(200).send(`${event_type} event sent!`);
}
