"use client";

import { supabaseClient } from "@/lib/supabase";
import Button from "@/ui/atoms/Button";
import Field from "@/ui/atoms/Field";
import Header from "@/ui/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
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
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const listClasses = `flex flex-col gap-4`;

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    console.log("ddd");
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data, error);
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
        <div className={listClasses}>
          <Button>Sign in with Google</Button>
          <Button>Sign in with GitHub</Button>
        </div>
        <p className="self-center text-lg">or</p>
        <form className={listClasses} onSubmit={handleSubmit(onSubmit)}>
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
          <Button className="self-end mt-2" as="button">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
