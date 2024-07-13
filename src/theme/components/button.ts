import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
    letterSpacing: "2.29px",
    color: "brand.white",
    borderRadius: "0",
    textTransform: "uppercase",
    lineHeight: "26px",
    fontWeight: "bold",
});

const sizes = {
    sm: defineStyle({
      padding: "0px",
      paddingBottom: "5px",
    }),
    md: defineStyle({
      padding: "0px",
      paddingBottom: "10px",
    })
}
 

const brandVariant = defineStyle({
    borderBottom: "2px solid",
    borderColor: "brand.green",
    fontSize: "16px",
    _hover: {
        color: "brand.green",
        textDecoration: "none"
    }
})
        
const buttonTheme = defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
      brand: brandVariant,
    },
    defaultProps: {
      colorScheme: "brand.green",
      variant: "brand",
      size: "md"
    },
  })

export default buttonTheme;