import { SimpleGrid, Show } from "@chakra-ui/react";
import Profile from "@components/Header/Profile";
import Intro from "@components/Header/Intro";
import Social from "@components/Low Level/Social";
import DecorativeIcon from "@components/Low Level/DecorativeIcon";

export default function Header() {
  return (
    <SimpleGrid
      px={{ base: "16px", md: "0px", "2xl": "165px" }}
      as="header"
      gap={{ base: "40px", md: "0" }}
      mx={{ xl: "80px", "2xl": "0px" }}
      pos="relative"
    >
      <Show above="md">
        <Social
          zIndex="2"
          gridArea={{ md: "1 / 1 / 2 / 2" }}
          placeSelf="start"
          mt={{ md: "29px", "2xl": "39px" }}
          pr={{ "2xl": "30px" }}
        />
      </Show>
      <Profile
        gridArea={{ md: "1 / 1 / 2 / 2" }}
        justifySelf={{ md: "end" }}
        justifyContent={{ md: "end" }}
      />
      <Intro gridArea={{ md: "1 / 1 / 2 / 2" }} />
      <DecorativeIcon
        type="rings"
        top={{ base: "124px", md: "86px", "2xl": "133px" }}
        left={{ base: "-342px", md: "-265px", "2xl": "-100px" }}
      />
      <DecorativeIcon
        type="circle"
        top={{ base: "254px", md: "586px", "2xl": "689px" }}
        right={{ base: "-65px", md: "-63px", "2xl": "545px" }}
      />
    </SimpleGrid>
  );
}
