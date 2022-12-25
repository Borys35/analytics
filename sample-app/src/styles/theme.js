"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const react_1 = require("@chakra-ui/react");
const Button = (0, react_1.defineStyleConfig)({
    defaultProps: {
        colorScheme: "teal",
        variant: "outline",
    },
});
const colors = {};
exports.theme = (0, react_1.extendTheme)({
    colors,
    components: {
        Button,
    },
});
