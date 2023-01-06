import { supabase } from "@/lib/supabase";
import { PropertyEventType } from "@/types/supabaseJson";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["POST"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method !== "POST")
    return res.status(400).send(`${req.method} is not allowed.`);

  const { event_type, api_key } = req.body as {
    event_type: PropertyEventType;
    api_key: string;
  };

  const { data: analyticsData, error: analyticsError } = await supabase
    .from("analytics")
    .select("id")
    .eq("api_key", api_key);

  if (analyticsError) return res.status(400).send(analyticsError.message);

  if (!analyticsData)
    return res.status(400).send("No analytics with given api_key found.");

  const { id } = analyticsData[0];

  const { error, status } = await supabase
    .from("events")
    .insert({ event_type, analytics_id: id });

  if (error) return res.status(400).send(error.message);

  res.status(status).send(`${event_type} event sent!`);
}
