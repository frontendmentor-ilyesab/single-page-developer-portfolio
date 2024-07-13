import Logo from "@components/Low Level/Logo";
import SocialIcons from "@components/Low Level/SocialIcons";
import { Flex, StyleProps } from "@chakra-ui/react";

export default function Social(props: StyleProps) {
  return (
    <Flex
      gap={{ base: "20px", md: "" }}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems="center"
      direction={{ base: "column", md: "row" }}
      w={{ md: "full" }}
      px={{ md: "30px" }}
      {...props}
    >
      <Logo />
      <SocialIcons />
    </Flex>
  );
}
