import { Box, Container, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props {
  title: string;
  children: JSX.Element;
}

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <Container maxW="8xl">
      <Helmet>
        <title>{title} | Trakker Sample App</title>
      </Helmet>
      <Flex direction="column" h="100vh">
        <Navigation />
        <Box as="main" flex="1">
          {children}
        </Box>
        <Footer />
      </Flex>
    </Container>
  );
};

export default Layout;
