import { SimpleGrid } from "@chakra-ui/react";
import Header from "@components/Header";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Contact from "@components/Contact";

function App() {
  return (
    <SimpleGrid
      as="main"
      minH="100vh"
      bg="brand.black"
      gap={{ base: "80px", md: "100px", "2xl": "140px" }}
      overflowX="hidden"
    >
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </SimpleGrid>
  );
}

export default App;
