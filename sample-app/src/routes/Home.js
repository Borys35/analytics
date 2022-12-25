"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("@chakra-ui/icons");
const react_1 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = __importDefault(require("../components/Layout"));
const Home = () => {
    function handleClickEvent() {
        console.log("onclick Event");
    }
    function handleThrowError() {
        throw new Error("An expected error");
    }
    return (<Layout_1.default title="Home">
      <react_1.Flex direction="column" alignItems="center" my={12} textAlign="center">
        <react_1.Heading as="h1" fontSize="5xl" mb={4}>
          Trakker sample app
        </react_1.Heading>
        <react_1.Text fontSize="lg" mb={12}>
          It's a sample app to demonstrate a workflow of the{" "}
          <react_1.Link href="https://www.npmjs.com/package/trakker" isExternal color="blue">
            trakker npm package
            <icons_1.ExternalLinkIcon mx="2px"/>
          </react_1.Link>
          !
          <br />
          Open browser console to view logs.
        </react_1.Text>
        <react_1.Flex gap={2} flexWrap="wrap" justifyContent="center">
          <react_1.Button onClick={handleClickEvent}>onclick event</react_1.Button>
          <react_1.Button colorScheme="red" onClick={handleThrowError}>
            throw error
          </react_1.Button>
          <react_router_dom_1.Link to="/about">
            <react_1.Button>change page (/about)</react_1.Button>
          </react_router_dom_1.Link>
        </react_1.Flex>
      </react_1.Flex>
    </Layout_1.default>);
};
exports.default = Home;
