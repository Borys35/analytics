import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY || ""
);

// export const signInWithGoogle = () => {
//   supabaseClient.auth.signInWithOAuth({ provider: "google" });
// };

// export const signInWithGitHub = () => {
//   supabaseClient.auth.signInWithOAuth({ provider: "github" });
// };
