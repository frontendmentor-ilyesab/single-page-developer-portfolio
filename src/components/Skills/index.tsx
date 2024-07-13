import { SimpleGrid } from "@chakra-ui/react";
import SkillSection from "@components/Skills/SkillSection";

export default function Skills() {
  return (
    <SimpleGrid gap={{ base: "80px", md: "100px", "2xl": "140px" }}>
      <SkillSection type="webdev" />
      <SkillSection type="devops" />
    </SimpleGrid>
  );
}
