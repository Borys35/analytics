"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_helmet_1 = require("react-helmet");
const Footer_1 = __importDefault(require("./Footer"));
const Navigation_1 = __importDefault(require("./Navigation"));
const Layout = ({ title, children }) => {
    return (<react_1.Container maxW="8xl">
      <react_helmet_1.Helmet>
        <title>{title} | Trakker Sample App</title>
      </react_helmet_1.Helmet>
      <react_1.Flex direction="column" h="100vh">
        <Navigation_1.default />
        <react_1.Box as="main" flex="1">
          {children}
        </react_1.Box>
        <Footer_1.default />
      </react_1.Flex>
    </react_1.Container>);
};
exports.default = Layout;
