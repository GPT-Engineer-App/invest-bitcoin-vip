import React from "react";
import { Box, Button, Container, Heading, FormControl, FormLabel, Input, Stack, NumberInput, NumberInputField, Text, useToast } from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleInvestment = (e) => {
    e.preventDefault();
    // Čia turėtų būti logika, jungianti su backend'ą, bet šiame pavyzdyje tai yra tik imitacija
    toast({
      title: "Investicija sėkminga.",
      description: "Jūsų investicija sėkmingai priimta. 10% suma atskirta komisiniams.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6} textAlign="center">
        Investuokite į Bitcoin ar USDT
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
        <form onSubmit={handleInvestment}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>El. paštas</FormLabel>
              <Input type="email" isRequired />
            </FormControl>
            <FormControl id="amount">
              <FormLabel>Investuojama suma</FormLabel>
              <NumberInput min={0}>
                <NumberInputField isRequired />
              </NumberInput>
            </FormControl>
            <Button leftIcon={<FaBitcoin />} colorScheme="yellow" type="submit" isFullWidth>
              Investuoti
            </Button>
          </Stack>
        </form>
      </Box>
      <Text textAlign="center" mt={6}>
        Visos komisinės mokesčiai yra 10% ir yra automatiškai nuskaičiuojami.
      </Text>
    </Container>
  );
};

export default Index;
