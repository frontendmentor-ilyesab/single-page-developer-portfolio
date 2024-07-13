import { SimpleGrid } from "@chakra-ui/react";
import Social from "@components/Low Level/Social";

export default function Footer() {
  return (
    <SimpleGrid
      as="footer"
      placeItems="center"
      pt={{ base: "39px", md: "30px", "2xl": "47px" }}
      pb={{ base: "60px", md: "40px", "2xl": "92px" }}
    >
      <Social />
    </SimpleGrid>
  );
}
