import {
  SimpleGrid,
  Heading,
  Text,
  Box,
  StyleProps,
  Show,
  Hide,
} from "@chakra-ui/react";

import LinkButton from "@/components/Low Level/LinkButton";

export default function Intro(props: StyleProps) {
  return (
    <SimpleGrid
      gap={{ base: "24px", md: "60px", "2xl": "66px" }}
      textAlign={{ base: "center", md: "left" }}
      placeItems={{ base: "center", md: "start" }}
      alignContent="start"
      pl={{ md: "32px", "2xl": "0px" }}
      w={{ md: "475px", "2xl": "706px" }}
      mt={{ md: "151px", "2xl": "198px" }}
      {...props}
    >
      <Heading
        as="h1"
        pb={{ base: "8px", md: "18px" }}
        fontSize={{ base: "32px", sm: "40px", md: "72px", "2xl": "88px" }}
        lineHeight={{ base: "32px", sm: "40px", md: "72px", "2xl": "88px" }}
        letterSpacing={{ base: "-1.14px", md: "-2.05px", "2xl": "-2.5px" }}
      >
        Nice to{" "}
        <Show above="md">
          <Hide above="2xl">
            <br />
          </Hide>
        </Show>
        meet you! I'm{" "}
        <Box
          as="span"
          borderBottomWidth={{ base: "4px", md: "6px" }}
          borderStyle="solid"
          borderColor="brand.green"
        >
          IlyesAb
        </Box>
        .
      </Heading>
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        lineHeight={{ base: "26px", md: "28px" }}
        maxW={{ "2xl": "445px" }}
        mt={{ "2xl": "-23px" }}
      >
        Based in Casablanca, Morocco, I'm a DevOps Engineer and IT Enthusiast
        passionate about how the new world of IT works. Since websites are a big
        part of that. I've been learning front-end web development. Below are
        the list of the skills I learned during this period. as well as some of
        the projects I made. In addition to my DevOps skill set.
      </Text>
      <LinkButton
        text="Contact Me"
        linkType="internal"
        sectionId="#contact"
        mt={{ md: "-26px", "2xl": "0px" }}
      />
    </SimpleGrid>
  );
}
