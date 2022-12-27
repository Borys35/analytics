import Button from "@/ui/atoms/Button";
import Header from "@/ui/Header";

const AboutPage = () => {
  return (
    <div className="flex flex-col py-24 gap-48">
      <Header>
        <h1 className="mb-6">About</h1>
        <p className="text-lg mb-16">
          Tool to measure websites{`'`} statistics and analyze user{`'`}s
          actions
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Borys35/trakker-analytics"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg">Source code</Button>
          </a>
          <a href="https://borys35.github.io/" target="_blank" rel="noreferrer">
            <Button variant="secondary" size="lg">
              More projects
            </Button>
          </a>
        </div>
      </Header>
    </div>
  );
};

export default AboutPage;
