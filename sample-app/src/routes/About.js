"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("@chakra-ui/icons");
const react_1 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
const Layout_1 = __importDefault(require("../components/Layout"));
const About = () => {
    return (<Layout_1.default title="About">
      <react_1.Flex direction="column" alignItems="center" my={12} textAlign="center">
        <react_1.Heading as="h1" fontSize="5xl" mb={4}>
          About
        </react_1.Heading>
        <react_1.Text fontSize="lg" mb={12}>
          Check out{" "}
          <react_1.Link href="https://www.npmjs.com/package/trakker" isExternal color="blue">
            trakker npm package
            <icons_1.ExternalLinkIcon mx="2px"/>
          </react_1.Link>
          !
        </react_1.Text>
        <react_router_dom_1.Link to="/">
          <react_1.Button>change route (/)</react_1.Button>
        </react_router_dom_1.Link>
      </react_1.Flex>
    </Layout_1.default>);
};
exports.default = About;
