import { SimpleGrid } from "@chakra-ui/react";

import LinkButton from "@/components/Low Level/LinkButton";

export default function Overlay({ projectName }: { projectName: string }) {
  return (
    <SimpleGrid
      gap="48px"
      pos="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(0,0,0,80%)"
      placeContent="center"
      placeItems="center"
      display="none"
      _groupHover={{
        display: "grid",
        cursor: "pointer",
      }}
    >
      <LinkButton
        text="View Project"
        linkType="external"
        type="project"
        projectName={projectName}
      />
      <LinkButton
        text="View Code"
        linkType="external"
        type="code"
        projectName={projectName}
      />
    </SimpleGrid>
  );
}
