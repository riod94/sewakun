
import {
    Box,
    Center,
    Heading,
    Stack,
    useColorModeValue,
    Image,
    Container,
    SimpleGrid,
    Button,
} from '@chakra-ui/react';
import Confetti from '../../../public/images/confetti-blue.svg';
import Netflix from 'https://boff.sewakun.com/storage/digital/netflix.jpg';
import Youtube from 'https://boff.sewakun.com/storage/digital/youtube.jpg';
import Hotstar from 'https://boff.sewakun.com/storage/digital/hotstar.jpg';
import Spotify from 'https://boff.sewakun.com/storage/digital/spotify.jpg';

const data = [
    {
        image: Netflix,
        client: 'Netflix',
        title: <Box fontSize={'xs'}>
            <ul style={{ listStyle: 'none' }}>
                <li><SimpleGrid columns={2}><Box>User Payer</Box><Box>Rp. 46.500 / 1bln</Box></SimpleGrid></li>
                <li><SimpleGrid columns={2}><Box>User Member</Box><Box>Rp. 51.615 / 1bln</Box></SimpleGrid></li>
            </ul>
        </Box>,
    },
    {
        image: Hotstar,
        client: 'Disney+ Hotstar',
        title: <Box fontSize={'xs'}>
            <ul style={{ listStyle: 'none' }}>
                <li><SimpleGrid columns={2}><Box>User Payer</Box><Box>Rp. 19.500 / 1bln</Box></SimpleGrid></li>
                <li><SimpleGrid columns={2}><Box>User Member</Box><Box>Rp. 21.645 / 1bln</Box></SimpleGrid></li>
                <li><SimpleGrid columns={2}><Box>User Payer</Box><Box>Rp. 99.500 / 12bln</Box></SimpleGrid></li>
                <li><SimpleGrid columns={2}><Box>User Member</Box><Box>Rp. 110.445 / 12bln</Box></SimpleGrid></li>
            </ul>
        </Box>,
    },
    {
        image: Youtube,
        client: 'Youtube',
        title: <Box fontSize={'xs'}>
            <ul style={{ listStyle: 'none' }}>
                <li><SimpleGrid columns={2}><Box>User Payer</Box><Box>Rp. 19.580 / 1bln</Box></SimpleGrid></li>
                <li><SimpleGrid columns={2}><Box>User Member</Box><Box>Rp. 21.932 / 1bln</Box></SimpleGrid></li>
            </ul>
        </Box>,
    },
    {
        image: Spotify,
        client: 'Spotify',
        title: <Box fontSize={'xs'}>
            <ul style={{ listStyle: 'none' }}>
                <li><SimpleGrid columns={2}><Box>User Payer</Box><Box>Rp. 17.380 / 1bln</Box></SimpleGrid></li>
                <li><SimpleGrid columns={2}><Box>User Member</Box><Box>Rp. 19.292 / 1bln</Box></SimpleGrid></li>
                <li><SimpleGrid columns={2}><Box>User Payer</Box><Box>Rp. 94.800 / 6bln</Box></SimpleGrid></li>
                <li><SimpleGrid columns={2}><Box>User Member</Box><Box>Rp. 105.228 / 6bln</Box></SimpleGrid></li>
            </ul>
        </Box>,
    },
];

interface CardInterface {
    title: any,
    image: string,
    client: string,
}

function Card({ title, image, client }: CardInterface) {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 4,
                        left: 0,
                        backgroundImage: `url(${image})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={220}
                        width={282}
                        objectFit={'cover'}
                        src={image}
                    />
                </Box>
                <Stack pt={6} align={'center'}>
                    <Stack>
                        <Heading color={'brand.200'} fontSize={'md'} textTransform={'uppercase'}>
                            {client}
                        </Heading>
                    </Stack>
                    <Stack my={6}>
                        {title}
                    </Stack>
                    <Stack my={6}>
                        <Button
                            flex={1}
                            px={10}
                            py={2}
                            rounded={'full'}
                            bg={'brand.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'brand.500',
                            }}
                            _focus={{
                                bg: 'brand.500',
                            }}
                            disabled
                        >
                            Segera Hadir
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}

function Products() {
    return (
        <Box id='products' bg={useColorModeValue('gray.100', 'gray.900')}>
            <Container maxW={"6xl"}
                css={{
                    backgroundImage: `url("${Confetti}")`,
                    backgroundColor: "gray.500"
                }}
            >
                <Stack py={8} spacing={0} align={'center'}>
                    <Heading>Produk Digital</Heading>
                </Stack>
                <Stack pb={8}>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
                        {
                            data.map((item) => (
                                <Card key={item.client} {...item} />
                            ))
                        }
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
}

export default Products