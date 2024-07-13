import { Icon, StyleProps } from "@chakra-ui/react";
import PatternRings from "@images/pattern-rings.svg?react";
import PatternCircle from "@images/pattern-circle.svg?react";
import { FunctionComponent } from "react";

interface DecorativeIconProps {
  type: keyof typeof patternTypes;
}

const patternTypes: {
  [index: string]: { icon: FunctionComponent; w: string; h: string };
} = {
  circle: {
    icon: PatternCircle,
    w: "129px",
    h: "129px",
  },
  rings: {
    icon: PatternRings,
    w: "530px",
    h: "129px",
  },
};

export default function DecorativeIcon({
  type,
  ...props
}: DecorativeIconProps & StyleProps) {
  const { icon, h, w } = patternTypes[type];
  return <Icon as={icon} w={w} h={h} pos="absolute" {...props} />;
}
