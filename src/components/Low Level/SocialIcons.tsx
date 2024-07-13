import LinkIcon from "@/components/Low Level/LinkIcon";
import { Flex } from "@chakra-ui/react";

export default function SocialIcons() {
  return (
    <Flex
      gap={{ base: "26px", md: "32px" }}
      alignItems="center"
      justifyContent={{ md: "end" }}
    >
      <LinkIcon
        type="github"
        w={{ base: "19.69px", md: "24.61px" }}
        h={{ base: "19.2px", md: "24px" }}
      />
      <LinkIcon
        type="frontendMentor"
        w={{ base: "19.68px", md: "24.6px" }}
        h={{ base: "17.6px", md: "22px" }}
      />
      <LinkIcon
        type="linkedin"
        w={{ base: "19.2px", md: "24px" }}
        h={{ base: "19.2px", md: "24px" }}
      />
      <LinkIcon
        type="twitter"
        w={{ base: "18.62px", md: "23.28px" }}
        h={{ base: "15.14px", md: "18.93px" }}
      />
    </Flex>
  );
}
