import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";

export const UI = () => {
  const Btn = useBreakpointValue({
    base: { color: "red" },
    sm: { color: "green" },
    md: { color: "purple" },
    lg: { color: "facebook" }
  });

  return (
    <Box w="80%" m="auto">
      <Button my={5} colorScheme={Btn.color} size="lg">
        {Btn.color}
      </Button>

      <Grid
        fontSize={"60px"}
        color="white"
        textAlign={"center"}
        templateColumns={{ base: "1fr 1fr 1fr", md: "3fr 3fr 1fr" }}
      >
        <GridItem bg="blue" padding={"60% 0px"}>
          Navbar
        </GridItem>
        <GridItem bg="orange" padding={"60% 0px"}>
          Content
        </GridItem>
        <GridItem bg="red" padding={"60% 0px"}>
          Width
        </GridItem>
      </Grid>
    </Box>
  );
};