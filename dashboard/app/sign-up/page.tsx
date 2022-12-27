"use client";

import Button from "@/ui/atoms/Button";
import Field from "@/ui/atoms/Field";
import Header from "@/ui/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import * as yup from "yup";
import { supabaseClient } from "../../lib/supabase";

type Inputs = {
  username: string;
  email: string;
  password: string;
  password2: string;
};

const schema = yup
  .object({
    username: yup.string().min(2).max(16).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  })
  .required();

const SignUpPage = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const listClasses = `flex flex-col gap-4`;

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    username,
    password,
  }) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });
    console.log(data, error);
  };

  return (
    <div className="flex flex-col py-24 gap-16">
      <Header>
        <h1 className="mb-6">Sign up</h1>
        <p className="text-lg">
          Create new account and get started. If you already have an account,{" "}
          <Link href="/sign-in" className="link">
            sign in
          </Link>{" "}
          instead.
        </p>
      </Header>
      <div className="flex flex-col gap-8 w-full max-w-sm mx-auto">
        <div className={listClasses}>
          <Button>Sign up with Google</Button>
          <Button>Sign up with GitHub</Button>
        </div>
        <p className="self-center text-lg">or</p>
        <form className={listClasses} onSubmit={handleSubmit(onSubmit)}>
          <Field
            label="Username"
            {...register("username")}
            error={errors.username}
          />
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
            autoComplete="new-password"
            {...register("password")}
            error={errors.password}
          />
          <Field
            label="Repeat password"
            type="password"
            autoComplete="new-password"
            {...register("password2")}
            error={errors.password2}
          />
          <Button className="self-end mt-2" as="button">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
