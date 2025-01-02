import { Box, Text, Flex, HStack, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w="100%" p={0} m={0} bg={useColorModeValue("white","black")}>
      <Flex
        h={16}
        w="100%"
        p={4}
        alignItems={"center"}
        justifyContent={"space-between"}
        
      >
        <Text
          fontSize={{ base: "15", sm: "20" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          <Link to={"/"}>Credits</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
        <Text>Color Switch</Text>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? ":)" : " :("}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
