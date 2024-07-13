import { SimpleGrid, Heading } from "@chakra-ui/react";
import Skill from "@components/Skills/Skill";
import DecorativeIcon from "@components/Low Level/DecorativeIcon";

export default function SkillSection({ type }: { type: "webdev" | "devops" }) {
  let heading, skills;
  if (type === "webdev") {
    heading = "Web Development";
    skills = (
      <>
        <Skill name="HTML" lvlOfExperience="Advanced" />
        <Skill name="CSS" lvlOfExperience="Advanced" />
        <Skill name="Javascript" lvlOfExperience="Advanced" />
        <Skill name="React" lvlOfExperience="Advanced" />
        <Skill name="Typescript" lvlOfExperience="Intermediate" />
        <Skill name="TailwindCSS" lvlOfExperience="Intermediate" />
        <Skill name="NextJS" lvlOfExperience="Intermediate" />
        <Skill name="ChakraUI" lvlOfExperience="Intermediate" />
        <Skill name="Formik" lvlOfExperience="Intermediate" />
        <Skill name="Sass" lvlOfExperience="Junior" />
        <Skill name="Vite" lvlOfExperience="Advanced" />
        <Skill name="Accessibility" lvlOfExperience="Junior" />
      </>
    );
  } else {
    heading = "DevOps";
    skills = (
      <>
        <Skill name="Docker" lvlOfExperience="Advanced" />
        <Skill name="Kubernetes" lvlOfExperience="Advanced" />
        <Skill name="Python" lvlOfExperience="Intermediate" />
        <Skill name="Terraform" lvlOfExperience="Intermediate" />
        <Skill name="AWS" lvlOfExperience="Advanced" />
        <Skill name="Azure DevOps" lvlOfExperience="Advanced" />
      </>
    );
  }
  return (
    <SimpleGrid
      as="section"
      borderY={{ base: "1px solid" }}
      borderBottom={{ base: "1px solid", md: "none" }}
      borderColor="brand.white"
      py={{ base: "40px", md: "0px" }}
      pt={{ base: "40px", md: "52px", "2xl": "72px" }}
      gap={{ base: "24px", md: "52px 7px", "2xl": "58px 30px" }}
      placeItems={{ base: "center", md: "start" }}
      pl={{ base: "16px", md: "0", "2xl": "5px" }}
      pr={{ base: "14px", md: "9px", "2xl": "5px" }}
      pos="relative"
      columns={{ md: 2, "2xl": 3 }}
      ml={{ md: "32px", xl: "80px", "2xl": "165px" }}
      mr={{ md: "30px", xl: "80px", "2xl": "165px" }}
    >
      <Heading
        fontSize={{ base: "32px", sm: "40px", md: "72px", "2xl": "88px" }}
        lineHeight={{ base: "32px", sm: "40px", md: "72px", "2xl": "88px" }}
        letterSpacing={{ base: "-1.14px", md: "-2.05px", "2xl": "-2.5px" }}
        gridColumn={{ md: "span 2", "2xl": "span 3" }}
        mb={{ "2xl": "11px" }}
      >
        {heading}
      </Heading>
      {skills}
      <DecorativeIcon
        type="rings"
        bottom={{ base: "-65px", "2xl": "-55px" }}
        right={{ base: "-344px", md: "-332px", "2xl": "-404px" }}
      />
    </SimpleGrid>
  );
}
