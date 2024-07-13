import { defineStyleConfig } from "@chakra-ui/styled-system";

export default defineStyleConfig({
    baseStyle: {
        fontWeight: "bold",
        color: "brand.white"
    },
    sizes: {
        xl: {
            fontSize: "88px",
            lineHeight: "88px",
            letterSpacing: "-2.5px"
        },
        l: {
            fontSize: "48px",
            lineHeight: "56px",
            letterSpacing: "-1.5px"
        },
        m: {
            fontSize: "24px",
            lineHeight: "32px"
        }
    },
    defaultProps: {
        size: "m"
    }
})