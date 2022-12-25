import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as BrowserLink } from "react-router-dom";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About">
      <Flex direction="column" alignItems="center" my={12} textAlign="center">
        <Heading as="h1" fontSize="5xl" mb={4}>
          About
        </Heading>
        <Text fontSize="lg" mb={12}>
          Check out{" "}
          <Link
            href="https://www.npmjs.com/package/trakker"
            isExternal
            color="blue"
          >
            trakker npm package
            <ExternalLinkIcon mx="2px" />
          </Link>
          !
        </Text>
        <BrowserLink to="/">
          <Button>change route (/)</Button>
        </BrowserLink>
      </Flex>
    </Layout>
  );
};

export default About;
