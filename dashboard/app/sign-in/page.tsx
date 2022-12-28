"use client";

import { supabaseClient } from "@/lib/supabase";
import Button from "@/ui/atoms/Button";
import Field from "@/ui/atoms/Field";
import Header from "@/ui/Header";
import ProviderButtons from "@/ui/ProviderButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthError } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [cookies, setCookie] = useCookies();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setLoading(true);

    const {
      data: { session },
      error,
    } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) return setError(error);
    if (!session) return;

    setCookie("access_token", session.access_token);
    setCookie("refresh_token", session.refresh_token);

    router.push("/");
  };

  return (
    <div className="flex flex-col py-24 gap-16">
      <Header>
        <h1 className="mb-6">Sign in</h1>
        <p className="text-lg">
          Sign in to your existing account. If you haven’t made one,{" "}
          <Link href="/sign-up" className="link">
            sign up
          </Link>{" "}
          instead.
        </p>
      </Header>
      <div className="flex flex-col gap-8 w-full max-w-sm mx-auto">
        <ProviderButtons />
        <p className="self-center text-lg">or</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {error && <p className="text-error">{error.message}</p>}
          <Field
            label="Your e-mail"
            type="email"
            autoComplete="username"
            {...register("email")}
            error={errors.email}
          />
          <Field
            label="Password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
            error={errors.password}
          />
          <Button className="self-end mt-2" as="button" disabled={loading}>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
