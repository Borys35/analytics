import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={3}>
      &copy; {new Date().getFullYear()}{" "}
      <Link href="https://borys35.github.io/" isExternal>
        Borys Kaczmarek <ExternalLinkIcon mx="2px" />
      </Link>
    </Box>
  );
};

export default Footer;
