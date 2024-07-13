import { SimpleGrid, Heading, Text } from "@chakra-ui/react";
import Form from "@components/Contact/Form";

export default function Section() {
  return (
    <SimpleGrid
      gap={{ base: "50px", md: "48px", "2xl": "220px" }}
      pt={{ base: "60px", "2xl": "84px" }}
      pb={{ base: "87px", md: "92px" }}
      borderBottom="1px solid"
      borderColor="brand.white"
      placeItems={{ base: "center", "2xl": "start" }}
      ml={{ md: "30px", "2xl": "0px" }}
      mr={{ md: "32px", "2xl": "0px" }}
      columns={{ "2xl": 2 }}
    >
      <SimpleGrid
        gap={{ base: "20px", "2xl": "36px" }}
        w={{ md: "445px" }}
        textAlign={{ "2xl": "left" }}
        maxW={{ base: "432px", md: "none" }}
      >
        <Heading
          fontSize={{ base: "32px", sm: "40px", md: "72px", "2xl": "88px" }}
          lineHeight={{ base: "32px", sm: "40px", md: "72px", "2xl": "88px" }}
          letterSpacing={{ base: "-1.14px", md: "-2.05px", "2xl": "-2.5px" }}
        >
          Contact
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          lineHeight={{ base: "26px", md: "28px" }}
        >
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </Text>
      </SimpleGrid>
      <Form />
    </SimpleGrid>
  );
}
