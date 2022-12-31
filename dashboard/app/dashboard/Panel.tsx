"use client";

import { supabase } from "@/lib/supabase";
import { Database } from "@/types/supabase";
import Button from "@/ui/atoms/Button";
import Field from "@/ui/atoms/Field";
import Modal from "@/ui/dashboard/Modal";
import PropertyItem from "@/ui/dashboard/PropertyItem";
import { yupResolver } from "@hookform/resolvers/yup";
import generateApiKey from "generate-api-key";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Properties = Database["public"]["Tables"]["analytics"]["Row"][];

interface Props {
  initialProperties: Properties;
}

const schema = yup.object({
  name: yup.string().min(3).max(64).required(),
});

type Inputs = {
  name: string;
};

const Panel: FC<Props> = ({ initialProperties }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<Properties>(initialProperties);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  async function handleAddProperty({ name }: Inputs) {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("analytics").insert({
        user_id: user.id,
        api_key: generateApiKey({ method: "base62" }).toString(),
        name,
      });

      const { data } = await supabase
        .from("analytics")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (data) setProperties(data);
    }
    setLoading(false);
    setModalOpen(false);
    reset();
  }

  return (
    <div className="flex flex-col gap-4">
      <Button className="self-start" onClick={() => setModalOpen(true)}>
        Add property
      </Button>
      {properties.map(({ id, name, created_at }) => (
        <PropertyItem
          key={id}
          id={id.toString()}
          name={name!}
          date={created_at!}
        />
      ))}
      <Modal open={modalOpen} onShadowClick={() => setModalOpen(false)}>
        <h4 className="mb-8">Add a property</h4>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleAddProperty)}
        >
          <Field label="Name" {...register("name")} error={errors.name} />
          <Button as="button" disabled={loading}>
            Create
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Panel;
