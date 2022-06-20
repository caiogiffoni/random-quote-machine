import {
  Box,
  Button,
  calc,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { useState } from "react";
import "./App.css";
import { quotes } from "../src/data/quotes.js";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      direction="column"
      bgColor={quote.bg}
      style={{
        transition: "all 2s ease",
      }}
    >
      <VStack
        w="600px"
        minH="350px"
        p="50px 40px"
        bgColor="white"
        id="quote-box"
        borderRadius="10px"
      >
        <Heading fontSize="35px">Stoic Quote Machine</Heading>
        <Text fontSize="22px" align="center" id="text" pt="30px">
          {quote.quote}
        </Text>
        <Flex justify="space-between" w="100%" size="16px" grow={2}>
          <Link
            id="tweet-quote"
            isExternal
            href={`https://twitter.com/intent/tweet?text="${quote.quote}" ${quote.author} #quotes`}
          >
            <IconButton
              aria-label="Search database"
              icon={<BsTwitter />}
              bgColor={quote.bg}
              color="white"
            />
          </Link>
          <Text id="author">- {quote.author}</Text>
        </Flex>
        <HStack justify="space-between" w="100%">
          <HStack color={quote.bg} spacing={3}>
            <Link href="https://www.linkedin.com/in/caiocgfg" isExternal>
              <Icon boxSize="30px" as={AiFillLinkedin} />
            </Link>
            <Link href="https://github.com/caiogiffoni" isExternal>
              <Icon boxSize="30px" as={AiFillGithub} />
            </Link>
          </HStack>

          <Button
            id="new-quote"
            backgroundColor={quote.bg}
            color="white"
            onClick={() =>
              setQuote(quotes[Math.floor(Math.random() * quotes.length)])
            }
          >
            New Quote
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default App;
