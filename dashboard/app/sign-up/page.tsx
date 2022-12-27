import Button from "@/ui/atoms/Button";
import Field from "@/ui/atoms/Field";
import Header from "@/ui/Header";
import Link from "next/link";

const SignUpPage = () => {
  const listClasses = `flex flex-col gap-4`;

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
        <form className={listClasses}>
          <Field label="Username" name="username" />
          <Field label="Your e-mail" name="email" type="email" />
          <Field label="Password" name="password" type="password" />
          <Field label="Repeat password" name="password2" type="password" />
          <Button className="self-end mt-2">Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
