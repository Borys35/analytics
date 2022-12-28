import Button from "@/ui/atoms/Button";
import Header from "@/ui/Header";
import InstructionItem from "@/ui/InstructionItem";
import ServiceItem from "@/ui/ServiceItem";
import Link from "next/link";

const Homepage = async () => {
  return (
    <div className="flex flex-col py-24 gap-48">
      <Header>
        <h1 className="mb-6">
          Analyse your websites with{" "}
          <span className="text-primary-500">Trakker</span>
        </h1>
        <p className="text-lg mb-16">
          With Trakker you can connect your web app to a dashboard and view all
          analysis and statistics that your website generates.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/sign-up">
            <Button size="lg">Get started</Button>
          </Link>
          <a
            href="https://github.com/Borys35/trakker-analytics"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary" size="lg">
              Source code
            </Button>
          </a>
        </div>
      </Header>
      <section className="md:grid md:grid-cols-2 md:gap-16">
        <h2 className="mb-16 md:mb-0">
          See what you can do with{" "}
          <span className="text-primary-500">Trakker</span>
        </h2>
        <div className="flex flex-col gap-10 md:gap-16">
          <ServiceItem
            title="Analyse website traffic"
            description="Connect dashboard to your web app and get started with analysing your traffic"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            }
          />
          <ServiceItem
            title="View graphs and stats"
            description="Our dashboard is focused to be easy-to-use and user-friendly. Every piece of content is immediately readable."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
            }
          />
          <ServiceItem
            title="Plug & play"
            description="Install npm package to your app and get started!"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            }
          />
        </div>
      </section>
      <section className="flex flex-col gap-20 items-center">
        <h2>
          Get started in{" "}
          <span className="text-primary-500">less than 3 minutes</span>
        </h2>
        <div className="relative flex flex-col gap-8">
          <div className="absolute left-0 translate-x-10 top-0 bottom-0 md:-bottom-20 md:left-1/2 md:-translate-x-1/2 border-r-2 border-r-neutral-700"></div>
          <InstructionItem
            title="Create an account"
            description="Our dashboard is focused to be easy-to-use and user-friendly. Every piece of content is immediately readable."
          />
          <InstructionItem
            title="Create a property of your website"
            description="Our dashboard is focused to be easy-to-use and user-friendly. Every piece of content is immediately readable."
          />
          <InstructionItem
            title="Install npm package and connect"
            description="Our dashboard is focused to be easy-to-use and user-friendly. Every piece of content is immediately readable."
          />
          <InstructionItem
            title="Everything’s done!"
            description="Our dashboard is focused to be easy-to-use and user-friendly. Every piece of content is immediately readable."
          />
        </div>
        <Link href="/sign-up">
          <Button size="lg">Get started</Button>
        </Link>
      </section>
    </div>
  );
};

export default Homepage;
