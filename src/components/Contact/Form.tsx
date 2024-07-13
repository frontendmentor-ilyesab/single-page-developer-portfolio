import { SimpleGrid, Button, useToast } from "@chakra-ui/react";
import Control from "@components/Contact/Control";
import * as Yup from "yup";
import { Formik, Form as FormikForm } from "formik";
import type { FormValues } from "@components/Contact/type";
import Toast from "@components/Contact/Toast";

const ERRORS = {
  REQUIRED: "This field is required!",
  FORMAT: "Sorry, invalid format here",
};

const FormSchema = Yup.object().shape({
  name: Yup.string().required(ERRORS.REQUIRED),
  email: Yup.string().email(ERRORS.FORMAT).required(ERRORS.REQUIRED),
  message: Yup.string().required(ERRORS.REQUIRED),
});

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

export default function Form() {
  const toast = useToast();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={async (values: FormValues) => {
        const { status } = await fetch(
          `${window.origin}${import.meta.env.VITE_FORM_ENDPOINT}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const wasSuccessful = status === 200 || status === 201;
        toast({
          render: () => <Toast successful={wasSuccessful} />,
          duration: 3000,
          isClosable: true,
        });
      }}
    >
      {({ isSubmitting }) => (
        <SimpleGrid
          as={FormikForm}
          gap="32px"
          w={{ base: "full", md: "445px" }}
          autoComplete="off"
          noValidate
          spellCheck="false"
          maxW={{ base: "432px", md: "none" }}
        >
          <Control label="name" name="name" type="text" />
          <Control label="email" name="email" type="email" />
          <Control label="Message" name="message" isTextArea={true} />
          <Button
            type="submit"
            justifySelf="end"
            size={{ base: "sm", sm: "md" }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </SimpleGrid>
      )}
    </Formik>
  );
}
