import { Icon, StyleProps, Link } from "@chakra-ui/react";
import GithubIcon from "@images/icon-github.svg?react";
import FrontendMentorIcon from "@images/icon-frontend-mentor.svg?react";
import LinkdeinIcon from "@images/icon-linkedin.svg?react";
import TwitterIcon from "@images/icon-twitter.svg?react";
import { FunctionComponent } from "react";

const iconTypes: {
  [index: string]: { icon: FunctionComponent; link: string };
} = {
  github: {
    icon: GithubIcon,
    link: "https://github.com/ilyesab",
  },
  frontendMentor: {
    icon: FrontendMentorIcon,
    link: "https://www.frontendmentor.io/profile/ilyesab",
  },
  linkedin: {
    icon: LinkdeinIcon,
    link: "https://www.linkedin.com/in/iliass-abouelhouda-a45613194/",
  },
  twitter: {
    icon: TwitterIcon,
    link: "https://x.com/Ilyes_ab__",
  },
};

export default function LinkIcon({
  type,
  ...props
}: StyleProps & { type: keyof typeof iconTypes }) {
  return (
    <Link aria-label={type.toString()} href={iconTypes[type].link} isExternal>
      <Icon
        as={iconTypes[type].icon}
        {...props}
        _hover={{ cursor: "pointer" }}
        sx={{
          "&:hover path": {
            fill: "brand.green",
          },
        }}
      />
    </Link>
  );
}
