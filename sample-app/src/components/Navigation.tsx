import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box my={4} px={6} py={3} borderRadius="lg" boxShadow="md" cursor="default">
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
