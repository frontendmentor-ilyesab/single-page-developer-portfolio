import { SimpleGrid, Heading, Text } from "@chakra-ui/react";

interface SkillProps {
  name: string;
  lvlOfExperience: "Newbie" | "Junior" | "Intermediate" | "Advanced" | "Expert";
}

export default function Skill({ name, lvlOfExperience }: SkillProps) {
  return (
    <SimpleGrid
      gap={{ base: "1px", md: "14px" }}
      placeItems={{ base: "center", md: "start" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Heading
        fontSize="32px"
        lineHeight="40px"
        letterSpacing="-1px"
        size={{ md: "l" }}
      >
        {name}
      </Heading>
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        lineHeight={{ base: "26px", md: "28px" }}
        textTransform="capitalize"
      >
        {lvlOfExperience}
      </Text>
    </SimpleGrid>
  );
}
