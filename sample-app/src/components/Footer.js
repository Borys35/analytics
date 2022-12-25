"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("@chakra-ui/icons");
const react_1 = require("@chakra-ui/react");
const Footer = () => {
    return (<react_1.Box as="footer" py={3}>
      &copy; {new Date().getFullYear()}{" "}
      <react_1.Link href="https://borys35.github.io/" isExternal>
        Borys Kaczmarek <icons_1.ExternalLinkIcon mx="2px"/>
      </react_1.Link>
    </react_1.Box>);
};
exports.default = Footer;
