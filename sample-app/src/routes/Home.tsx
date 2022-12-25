import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  function handleClickEvent() {
    console.log("onclick Event");
  }

  function handleThrowError() {
    throw new Error("An expected error");
  }

  return (
    <Layout title="Home">
      <Flex direction="column" alignItems="center" my={12} textAlign="center">
        <Heading as="h1" fontSize="5xl" mb={4}>
          Trakker sample app
        </Heading>
        <Text fontSize="lg" mb={12}>
          It's a sample app to demonstrate a workflow of the{" "}
          <Link
            href="https://www.npmjs.com/package/trakker"
            isExternal
            color="blue"
          >
            trakker npm package
            <ExternalLinkIcon mx="2px" />
          </Link>
          !
          <br />
          Open browser console to view logs.
        </Text>
        <Flex gap={2} flexWrap="wrap" justifyContent="center">
          <Button onClick={handleClickEvent}>onclick event</Button>
          <Button colorScheme="red" onClick={handleThrowError}>
            throw error
          </Button>
          <RouterLink to="/about">
            <Button>change page (/about)</Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Home;
