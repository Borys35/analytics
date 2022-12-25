"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_router_dom_1 = require("react-router-dom");
const Navigation = () => {
    return (<react_1.Box my={4} px={6} py={3} borderRadius="lg" boxShadow="md" cursor="default">
      <nav>
        <react_router_dom_1.Link to="/">
          <react_1.Text as="b" fontSize="2xl">
            Trakker sample
          </react_1.Text>
        </react_router_dom_1.Link>
      </nav>
    </react_1.Box>);
};
exports.default = Navigation;
