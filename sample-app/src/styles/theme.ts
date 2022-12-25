import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const Button = defineStyleConfig({
  defaultProps: {
    colorScheme: "teal",
    variant: "outline",
  },
});

const colors = {};

export const theme = extendTheme({
  colors,
  components: {
    Button,
  },
});
