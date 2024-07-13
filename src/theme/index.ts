import { extendTheme } from "@chakra-ui/react";
import Text from "@/theme/components/text";
import Heading from "@/theme/components/heading";
import Button from "@/theme/components/button";

const theme = {
  fonts: {
    body: "'Space Grotesk', sans-serif",
    heading: "'Space Grotesk', sans-serif",
    mono: "'Space Grotesk', sans-serif",
  },
  colors: {
    brand: {
      black: "hsl(0, 0%, 8%)",
      gray: {
        dark: "hsl(0, 0%, 14%)",
        dark_transparent: "hsla(0, 0%, 14%, 1%)",
        normal: "hsl(0, 0%, 85%)",
      },
      green: "hsl(153, 71%, 59%)",
      white: "hsl(0, 0%, 100%)",
      red: "hsl(7, 100%, 68%)"
    },
  },
  breakpoints: {
    base: "0px",
    sm: "375px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    '2xl': "1440px"
  },
  components: {
    Text,
    Heading,
    Button,
  }
};

export default extendTheme(theme);
