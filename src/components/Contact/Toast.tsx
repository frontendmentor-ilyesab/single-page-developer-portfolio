import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Flex,
  SimpleGrid,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";

export default function Toast({ successful }: { successful: boolean }) {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return isOpen ? (
    <Alert
      status={successful ? "success" : "error"}
      bg={successful ? "brand.green" : "brand.red"}
      color="brand.white"
    >
      <Flex alignItems="start" justifyContent="space-between" w="full">
        <Flex justifyContent="start">
          <AlertIcon color="brand.white" />
          <SimpleGrid>
            <AlertTitle>
              {successful ? "Message Sent Successfully" : "Error Occurred"}
            </AlertTitle>
            <AlertDescription>
              {successful
                ? "Thank you for contacting me!"
                : "Please try again!"}
            </AlertDescription>
          </SimpleGrid>
        </Flex>
        <CloseButton
          onClick={onClose}
          _hover={{}}
          alignItems="start"
          pt="5px"
        />
      </Flex>
    </Alert>
  ) : null;
}
