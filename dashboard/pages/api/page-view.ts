import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  supabase.from("dfdfd/sdfs").update({});
  res.status(200).send("page-view added");
}
