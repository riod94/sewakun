import type { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

import Brand from '../../../public/images/brand/Brand.svg';
import BrandWhite from '../../../public/images/brand/Brand-White.svg';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "blackAlpha.500")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader><Image src={useColorModeValue(Brand, BrandWhite)} height={50} /></ListHeader>
            <Text as={'h6'}>Sewakun adalah layanan patungan sewa akun digital.</Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Sewakun</ListHeader>
            <Link href={"#hero"}>Tentang Kami</Link>
            <Link href={"#howToOrder"}>Cara Pesan</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Dukungan</ListHeader>
            <Link href={"#faq"}>FAQ</Link>
            <Link href={"#contactUs"}>Hubungi Kami</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Kebijakan Privasi</Link>
            <Link href={"#"}>Ketentuan Layanan</Link>
            {/* <Link href={"#"}>Cookies Policy</Link> */}
            {/* <Link href={"#"}>Law Enforcement</Link> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2022 Sewakun. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
