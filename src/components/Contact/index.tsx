import { Box } from "@chakra-ui/react";
import Section from "@components/Contact/Section";
import Footer from "@components/Footer";
import DecorativeIcon from "@components/Low Level/DecorativeIcon";

export default function Contact() {
  return (
    <Box
      as="section"
      bg="brand.gray.dark"
      px={{ base: "16px", md: "0", xl: "80px", "2xl": "165px" }}
      textAlign="center"
      pos="relative"
      id="contact"
    >
      <Section />
      <Footer />
      <DecorativeIcon
        type="rings"
        top={{ base: "436px", md: "547px", "2xl": "327px" }}
        left={{ base: "-343px", md: "-368px", "2xl": "-205px" }}
      />
    </Box>
  );
}
