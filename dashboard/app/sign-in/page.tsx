import Button from "@/ui/atoms/Button";
import Field from "@/ui/atoms/Field";
import Header from "@/ui/Header";
import Link from "next/link";

const SignInPage = () => {
  const listClasses = `flex flex-col gap-4`;

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
        <form className={listClasses}>
          <Field label="Your e-mail" name="email" type="email" />
          <Field
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <Button className="self-end mt-2">Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
