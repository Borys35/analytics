import Link from "next/link";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <Container as="nav" className="flex justify-between items-center">
      <Link href="/">Logo</Link>
      <div className="flex gap-12 items-center">
        <div className="md:flex gap-6 hidden">
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>
        </div>
        <div className="hidden md:block border-r-neutral-700 border-r-2 h-6"></div>
        <div className="flex gap-6 items-center">
          <NavItem>
            <Link href="/sign-in">Sign in</Link>
          </NavItem>
          <Link href="/sign-up">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Nav;
