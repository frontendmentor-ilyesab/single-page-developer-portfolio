import MobileImage from "@images/me/image-profile-mobile.webp";
import TabletImage from "@images/me/image-profile-tablet.webp";
import DesktopImage from "@images/me/image-profile-desktop.webp";

import { useBreakpointValue, Image, Box } from "@chakra-ui/react";

export default function ProfileImage() {
  const imageUrl = useBreakpointValue({
    base: MobileImage,
    sm: MobileImage,
    md: TabletImage,
    "2xl": DesktopImage,
  });
  return (
    <Box
      w="full"
      h={{ base: "64.53vw", md: "589px", "2xl": "747px" }}
      minH={{ base: "242px" }}
      maxH={{ base: "345px", md: "unset" }}
    >
      <Image
        w="full"
        h="full"
        objectFit="cover"
        objectPosition="bottom"
        src={imageUrl}
        alt="Adam Key Picture"
      />
    </Box>
  );
}
