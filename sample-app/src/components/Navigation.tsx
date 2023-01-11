import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box py={3} cursor="default">
      <nav>
        <Link to="/">
          <Text as="b" fontSize="2xl">
            Trakker sample
          </Text>
        </Link>
      </nav>
    </Box>
  );
};

export default Navigation;
