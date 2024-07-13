import {
  SimpleGrid,
  Flex,
  Image,
  useBreakpointValue,
  Heading,
  Text,
  Hide,
  Box,
  Show,
} from "@chakra-ui/react";

import Overlay from "@components/Projects/Overlay";

import LinkButton from "@/components/Low Level/LinkButton";

interface ProjectProps {
  id: number;
  projectName: string;
  languages: string[];
}

const thumbnailImages: { [index: string]: string } = import.meta.glob(
  "/assets/images/me/thumbnail-project-*.png",
  { eager: true, query: "?url", import: "default" }
);

const imageSrcTemplate = "/assets/images/me/thumbnail-project-id-size.png";

export default function Project({ id, projectName, languages }: ProjectProps) {
  const imageSize = useBreakpointValue({
    base: "small",
    md: "large",
  });

  const imageUrl = imageSrcTemplate
    .replace("id", id.toString())
    .replace("size", imageSize === undefined ? "small" : imageSize.toString());

  const projectNameNormalized = projectName.toLowerCase().replace(/\s/g, "-");
  return (
    <SimpleGrid gap="20px">
      <Box
        border="2px solid"
        borderColor="brand.green"
        pos="relative"
        role="group"
      >
        <Image
          w="full"
          h="full"
          src={thumbnailImages[imageUrl]}
          alt="Project Thumbnail"
        />
        <Show above="2xl">
          <Overlay projectName={projectNameNormalized} />
        </Show>
      </Box>
      <SimpleGrid gap="7px">
        <Heading>{projectName}</Heading>
        <Flex gap="9px 18px" wrap="wrap">
          {languages.map((language, index) => {
            return <Text key={index}>{language}</Text>;
          })}
        </Flex>
      </SimpleGrid>
      <Hide above="2xl">
        <Flex gap="30px">
          <LinkButton
            text="View Project"
            linkType="external"
            type="project"
            projectName={projectNameNormalized}
          />
          <LinkButton
            text="View Code"
            linkType="external"
            type="code"
            projectName={projectNameNormalized}
          />
        </Flex>
      </Hide>
    </SimpleGrid>
  );
}
