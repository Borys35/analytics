import Container from "./atoms/Container";

const Footer = () => {
  return (
    <Container
      as="footer"
      className="flex flex-col md:flex-row justify-between md:items-center gap-4 text-sm font-bold"
    >
      <p>© 2022, Borys Kaczmarek</p>
      <div className="flex gap-x-8 text-neutral-400 flex-wrap">
        <a
          href="https://github.com/Borys35/trakker-analytics"
          target="_blank"
          rel="noreferrer"
        >
          source code
        </a>
        <a href="https://borys35.github.io/" target="_blank" rel="noreferrer">
          more projects
        </a>
      </div>
    </Container>
  );
};

export default Footer;
