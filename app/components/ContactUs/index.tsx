import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue,
    Link
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
    MdOutlinePhoneAndroid,
    MdPhoneAndroid,
} from 'react-icons/md';
import { BsPerson, BsInstagram, BsFacebook } from 'react-icons/bs';

function ContactUs() {
    return (
        <Box id='contactUs' bg={useColorModeValue("brand.50", "brand.700")}>
            <Container maxW="6xl" py={8} centerContent overflow="hidden">
                <Flex>
                    <Box
                        bg={useColorModeValue("brand.600", "brand.800")}
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}>
                        <Box>
                            <Wrap spacing={{ base: 20, sm: 4, md: 6, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading>Contact Us</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                            Silahkan isi formulir untuk menghubungi kami.
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <VStack pl={0} spacing={3} alignItems="flex-start">
                                                <Button
                                                    as={"a"}
                                                    href="mailto:halo@sewakun.com"
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid', borderColor: 'brand.200' }}
                                                    leftIcon={<MdPhoneAndroid color="#6C8591" size="20px" />}>
                                                    +62 812-9990-2002
                                                </Button>
                                                <Button
                                                    as={"a"}
                                                    href="mailto:halo@sewakun.com"
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid', borderColor: 'brand.200' }}
                                                    leftIcon={<MdEmail color="#6C8591" size="20px" />}>
                                                    halo@sewakun.com
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid', borderColor: 'brand.200' }}
                                                    leftIcon={<MdLocationOn color="#6C8591" size="20px" />}>
                                                    Medan, Indonesia
                                                </Button>
                                            </VStack>
                                        </Box>
                                        <HStack
                                            mt={{ lg: 10, md: 10 }}
                                            spacing={5}
                                            px={5}
                                            alignItems="center">
                                            <Link href="https://www.instagram.com/sewakun.official" target="_blank" isExternal>
                                                <IconButton
                                                    aria-label="facebook"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: 'brand.200' }}
                                                    icon={<BsFacebook size="28px" />}
                                                />
                                            </Link>
                                            <Link href="https://www.instagram.com/sewakun.official" target="_blank" isExternal>
                                                <IconButton
                                                    aria-label="instagram"
                                                    variant="ghost"
                                                    size="lg"
                                                    isRound={true}
                                                    _hover={{ bg: 'brand.200' }}
                                                    icon={<BsInstagram size="28px" />}
                                                />
                                            </Link>
                                        </HStack>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg={useColorModeValue("white", "gray.600")} borderRadius="lg">
                                        <Box m={6} color="#0B0E3F">
                                            <VStack spacing={5}>
                                                <FormControl>
                                                    <FormLabel color={useColorModeValue("brand.500", "white")}>Nama Lengkap</FormLabel>
                                                    <InputGroup color={useColorModeValue("brand.500", "white")}>
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<BsPerson color={useColorModeValue("gray.800", "white")} />}
                                                        />
                                                        <Input type="text" size="md" placeholder='Nama Lengkap' />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel color={useColorModeValue("brand.500", "white")}>Whatsapp</FormLabel>
                                                    <InputGroup color={useColorModeValue("brand.500", "white")}>
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlinePhoneAndroid color={useColorModeValue("gray.800", "white")} />}
                                                        />
                                                        <Input type="number" size="md" placeholder='08123456789' />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel color={useColorModeValue("brand.500", "white")}>Email</FormLabel>
                                                    <InputGroup color={useColorModeValue("brand.500", "white")}>
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlineEmail color={useColorModeValue("gray.800", "white")} />}
                                                        />
                                                        <Input type="text" size="md" placeholder='my@mail.com' />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel color={useColorModeValue("brand.500", "white")}>Pesan/Keluhan/Saran</FormLabel>
                                                    <Textarea
                                                        color={useColorModeValue("brand.500", "white")}
                                                        placeholder="Halo sewakun"
                                                    />
                                                </FormControl>
                                                <FormControl float="right">
                                                    <Button
                                                        variant="solid"
                                                        bg={useColorModeValue("brand.500", "brand.800")}
                                                        color="white"
                                                    >
                                                        Kirim Pesan
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default ContactUs