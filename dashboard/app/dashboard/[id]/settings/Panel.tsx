"use client";

import { supabase } from "@/lib/supabase";
import { Database } from "@/types/supabase";
import Button from "@/ui/atoms/Button";
import Field from "@/ui/atoms/Field";
import List from "@/ui/dashboard/property/settings/List";
import Section from "@/ui/dashboard/property/settings/Section";
import { yupResolver } from "@hookform/resolvers/yup";
import generateApiKey from "generate-api-key";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface Props {
  property: Database["public"]["Tables"]["analytics"]["Row"];
}

const schema = yup.object({
  name: yup.string().min(3).max(64).required(),
});

type Inputs = {
  name: string;
};

const Panel: FC<Props> = ({ property }) => {
  const [copied, setCopied] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const { id, name, api_key, created_at } = property;
  const router = useRouter();

  async function handleCopyAPIKey() {
    if (!api_key) return;

    await navigator.clipboard.writeText(api_key);
    setCopied(true);
  }

  async function handleRegenerateApiKey() {
    setRegenerating(true);
    await supabase
      .from("analytics")
      .update({ api_key: generateApiKey({ method: "base62" }).toString() })
      .eq("id", id);
    router.refresh();
    setRegenerating(false);
  }

  async function handleDeleteProperty() {
    setDeleting(true);
    await supabase.from("events").delete().eq("analytics_id", id);
    await supabase.from("analytics").delete().eq("id", id);
    router.replace("/dashboard");
    setDeleting(false);
  }

  async function onSubmit({ name }: Inputs) {
    setRenaming(true);
    await supabase.from("analytics").update({ name }).eq("id", id);
    router.refresh();
    setRenaming(false);
  }

  return (
    <List>
      <Section>
        <h4>Settings</h4>
      </Section>

      <Section>
        <h5>General</h5>
        <form
          className="flex gap-2 flex-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field
            defaultValue={name || ""}
            {...register("name")}
            error={errors.name}
          />
          <Button as="button" variant="secondary" disabled={renaming}>
            Rename
          </Button>
        </form>
        <p>
          Created at{" "}
          {created_at
            ? Intl.DateTimeFormat("en", {
                dateStyle: "long",
                timeStyle: "long",
              }).format(new Date(created_at))
            : "date unknown"}
        </p>
      </Section>

      <Section>
        <h5>API key</h5>

        <div className="flex gap-2 flex-wrap">
          <Field name="api_key" readOnly={true} value={api_key?.toString()} />
          <Button variant="secondary" onClick={handleCopyAPIKey}>
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </Section>

      <Section>
        <h5>Danger Zone</h5>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="error"
            onClick={handleRegenerateApiKey}
            disabled={regenerating}
          >
            Regenerate API key
          </Button>
          <Button
            variant="error"
            onClick={handleDeleteProperty}
            disabled={deleting}
          >
            Delete property
          </Button>
        </div>
      </Section>
    </List>
  );
};

export default Panel;
