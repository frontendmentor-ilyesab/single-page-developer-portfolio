import { SimpleGrid, Flex, Heading, Spacer } from "@chakra-ui/react";
import Project from "@components/Projects/Project";
import LinkButton from "@/components/Low Level/LinkButton";

export default function Projects() {
  return (
    <SimpleGrid
      as="section"
      gap={{ base: "40px", md: "60px 22px", "2xl": "69px 30px" }}
      px={{ base: "12px", sm: "16px", md: "30px", xl: "80px", "2xl": "165px" }}
      columns={{ md: 2 }}
    >
      <Flex
        as="header"
        gridColumn={{ md: "span 2" }}
        pl={{ md: "2px", "2xl": "0px" }}
        mb={{ "2xl": "11px" }}
        alignItems="center"
      >
        <Heading
          fontSize={{ base: "32px", sm: "40px", md: "72px", "2xl": "88px" }}
          lineHeight={{ base: "32px", sm: "40px", md: "72px", "2xl": "88px" }}
          letterSpacing={{ base: "-1.14px", md: "-2.05px", "2xl": "-2.5px" }}
        >
          Projects
        </Heading>
        <Spacer />
        <LinkButton
          text="Contact Me"
          linkType="internal"
          sectionId="#contact"
        />
      </Flex>
      <Project
        id={1}
        projectName="Static Job Listings"
        languages={["React", "Vite", "Typescript", "BEM"]}
      />
      <Project
        id={2}
        projectName="Interactive Comments Section"
        languages={["React", "Vite", "Typescript", "BEM"]}
      />
      <Project
        id={3}
        projectName="Age Calculator App"
        languages={["React", "NextJS", "Typescript", "TailwindCSS"]}
      />
      <Project
        id={4}
        projectName="Interactive Card Details Form"
        languages={["React", "Vite", "Typescript", "ChakraUI", "Formik", "Yup"]}
      />
      <Project
        id={5}
        projectName="Time Tracking Dashboard"
        languages={["React", "Vite", "Typescript", "BEM"]}
      />
      <Project
        id={6}
        projectName="Newsletter Sign Up With Success Message"
        languages={["React", "Vite", "Typescript", "BEM"]}
      />
    </SimpleGrid>
  );
}
