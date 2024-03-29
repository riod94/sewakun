import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { type ReactNode } from "react";
import { type MetaFunction } from "@remix-run/node";
import { Box, Button, ChakraProvider, extendTheme, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";
import { SEO_TITLE, SEO_DESCRIPTION, SEO_KEYWORDS } from "./contants";
import ByTheRoad from '../public/images/by-the-road.svg';
import Confetti from '../public/images/confetti.svg';
import { RecoilRoot } from "recoil";

export let meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  themeColor: '#1D4355'
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    900: "#112833",
    800: "#142F3B",
    700: "#173644",
    600: "#1A3C4D",
    500: "#1D4355",
    400: "#284C5E",
    300: "#3F5F6F",
    200: "#567280",
    100: "#6C8591",
    50: "#8398A2",
  },
};

const theme = extendTheme({ colors, config });

interface RootDefaultProps {
  title?: string,
  children: ReactNode;
}
const RootDefault = ({ title, children }: RootDefaultProps) => {
  return (
    <html lang="id">
      <head>
        <title>{title ?? SEO_TITLE}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <RecoilRoot>
          <ChakraProvider theme={theme}>
            {children}
            <LiveReload />
          </ChakraProvider>
        </RecoilRoot>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <RootDefault>
      <Outlet />
    </RootDefault>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <RootDefault title="Oh no!">
      <Box textAlign="center" py={20}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, brand.400, brand.600)"
          backgroundClip="text">
          Oh no!
        </Heading>

        <Heading as="h1" color={"gray.500"} mb={10}>There was an error</Heading>

        <Link
          to={"/"}
        >
          <Button
            colorScheme="brand"
            bgGradient="linear(to-r, brand.400, brand.500, brand.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </RootDefault>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  let title = `${caught.status} ${caught.statusText}`

  return (
    <RootDefault title={title}>
      <Flex
        minH={"100vh"}
        bg={useColorModeValue('#f1f1f1', 'gray.800')}
        align="center"
        justify="center"
        css={{
          backgroundImage: `url("${Confetti}")`,
          backgroundAttachment: 'fixed',
        }}
      >
        <Box textAlign="center" py={10} px={6}>
          <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, brand.400, brand.600)"
            backgroundClip="text">
            {caught.status}
          </Heading>

          <Heading color={"gray.500"} fontSize={28} mt={3} mb={10}>
            {caught.statusText}
          </Heading>

          <Image src={ByTheRoad} alt="by-the-road" height={"50vh"} mb={10} />

          <Link
            to={"/"}
          >
            <Button
              colorScheme="brand"
              bgGradient="linear(to-r, brand.400, brand.500, brand.600)"
              color="white"
              variant="solid"
            >
              Go to Home
            </Button>
          </Link>

        </Box>
      </Flex>
    </RootDefault >
  );
}
