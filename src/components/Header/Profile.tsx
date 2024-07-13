import { Flex, StyleProps, Hide } from "@chakra-ui/react";
import Social from "@components/Low Level/Social";
import ProfileImage from "@components/Low Level/ProfileImage";

export default function Profile(props: StyleProps) {
  return (
    <Flex
      w={{ base: "46.4vw", md: "322px", "2xl": "445px" }}
      minW={{ base: "174px" }}
      maxW={{ base: " 245px", md: "unset" }}
      h={{ md: "715px", "2xl": "888px" }}
      mx={{ base: "auto", md: "unset" }}
      direction="column"
      gap={{ base: "49px", md: "0px" }}
      border="1px"
      borderColor="brand.green"
      bgGradient={{
        base: "linear(to-r, brand.gray.dark_transparent, brand.gray.dark)",
        md: undefined,
      }}
      bg={{ md: "brand.gray.dark" }}
      {...props}
    >
      <Hide above="md">
        <Social mt="20px" mx="10px" />
      </Hide>
      <ProfileImage />
    </Flex>
  );
}
