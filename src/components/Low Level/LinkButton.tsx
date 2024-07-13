import { Button as ChakraButton, StyleProps, Link } from "@chakra-ui/react";

const URL_TEMPLATES = {
  project: "https://frontendmentor-ilyesab.github.io/XXX/",
  code: "https://github.com/frontendmentor-ilyesab/XXX",
};

type LinkButtonProps =
  | {
      text: string;
      linkType: "external";
      projectName: string;
      type: "code" | "project";
      sectionId?: "never";
    }
  | {
      text: string;
      linkType: "internal";
      projectName?: never;
      type?: never;
      sectionId: string;
    };

export default function LinkButton({
  text,
  linkType,
  projectName,
  type,
  sectionId,
  ...props
}: LinkButtonProps & StyleProps) {
  const href =
    linkType === "external"
      ? type === "project"
        ? URL_TEMPLATES.project.replace("XXX", projectName)
        : URL_TEMPLATES.code.replace("XXX", projectName)
      : sectionId;
  return (
    <ChakraButton
      as={Link}
      href={href}
      isExternal={linkType === "external"}
      size={{ base: "sm", sm: "md" }}
      {...props}
    >
      {text}
    </ChakraButton>
  );
}
