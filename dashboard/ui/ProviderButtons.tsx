"use client";

import { supabaseClient } from "@/lib/supabase";
import Button from "./atoms/Button";

const ProviderButtons = () => {
  function handleSignInWithGoogle() {
    supabaseClient.auth.signInWithOAuth({ provider: "google" });
  }
  function handleSignInWithGitHub() {
    supabaseClient.auth.signInWithOAuth({ provider: "github" });
  }

  return (
    <div className="flex flex-col gap-4">
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
