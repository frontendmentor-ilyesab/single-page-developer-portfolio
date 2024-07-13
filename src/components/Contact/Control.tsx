import {
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  InputProps,
  TextareaProps,
  VStack,
  Icon,
} from "@chakra-ui/react";

import IconError from "@images/icon-error.svg?react";

import { useField } from "formik";

import type { FormValues } from "@components/Contact/type";

interface ControlProps {
  label: string;
  type?: "text" | "email";
  name: keyof FormValues;
  isTextArea?: true;
}

function InputOrTextArea({
  isTextArea,
  ...props
}: InputProps & TextareaProps & { isTextArea?: true }) {
  if (isTextArea) {
    return <Textarea resize="none" {...props} />;
  }
  return <Input {...props} />;
}

export default function Control({
  label,
  type,
  name,
  isTextArea,
}: ControlProps) {
  const [field, meta] = useField(name);

  const isError = meta.touched && meta.error !== "" && meta.error !== undefined;

  return (
    <FormControl pos="relative" isInvalid={isError}>
      <VStack spacing="5px" align="end">
        <InputOrTextArea
          aria-label={label}
          isTextArea={isTextArea}
          placeholder={label}
          type={isTextArea ? undefined : type}
          {...field}
          pl="24px"
          pb="16px"
          h={isTextArea ? "107px" : "auto"}
          variant="flushed"
          fontSize="16px"
          fontWeight="medium"
          lineHeight="26px"
          letterSpacing="-0.22px"
          color="brand.white"
          borderColor={!isError && meta.touched ? "brand.green" : "brand.white"}
          _focusVisible={{
            borderColor: "brand.green",
          }}
          _invalid={{
            borderColor: "brand.red",
          }}
          _placeholder={{
            opacity: "50%",
            textTransform: "uppercase",
            fontSize: "16px",
            fontWeight: "medium",
            lineHeight: "26px !important",
            letterSpacing: "-0.22px",
            color: "brand.white",
          }}
        />
        {isError && (
          <Icon
            as={IconError}
            pos="absolute"
            top="0"
            right="0"
            w="24px"
            h="24px"
          />
        )}
        <FormErrorMessage
          fontSize="12px"
          lineHeight="16px"
          letterSpacing="-0.17px"
          fontWeight="medium"
          color="brand.red"
        >
          {meta.error}
        </FormErrorMessage>
      </VStack>
    </FormControl>
  );
}
