"use client";

import { supabaseClient } from "@/lib/supabase";
import { AuthError } from "@supabase/supabase-js";
import { useState } from "react";
import Button from "./atoms/Button";

const ProviderButtons = () => {
  const [error, setError] = useState<AuthError | null>(null);

  async function handleSignInWithGoogle() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) return setError(error);
  }
  async function handleSignInWithGitHub() {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) return setError(error);
  }

  return (
    <div className="flex flex-col gap-4">
      {error && <p className="text-error">{error.message}</p>}
      <Button as="button" onClick={handleSignInWithGoogle}>
        Sign in with Google
      </Button>
      <Button as="button" onClick={handleSignInWithGitHub}>
        Sign in with GitHub
      </Button>
    </div>
  );
};

export default ProviderButtons;
