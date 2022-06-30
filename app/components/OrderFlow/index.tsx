import { type ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    Button,
    Image,
} from '@chakra-ui/react';

import Flow1 from '../../../public/images/order-flow/1.svg';
import Flow2 from '../../../public/images/order-flow/2.svg';
import Flow3 from '../../../public/images/order-flow/3.svg';
import Flow4 from '../../../public/images/order-flow/4.svg';
import Flow5 from '../../../public/images/order-flow/5.svg';

const HowOrderContainer = ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
};

const HowOrderContent = ({ children }: { children: ReactNode }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.600')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.600'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const HowOrderAvatar = ({
    flow,
    title,
}: {
    flow: string;
    title: string;
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Button
                fontSize='sm'
                rounded={'full'}
                bg={useColorModeValue('brand.400','gray.100')}
                color={useColorModeValue('white', 'brand.800')}
                boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                    bg: useColorModeValue('brand.500', 'gray.100')
                }}
                _focus={{
                    bg:useColorModeValue('brand.500', 'gray.100')
                }}>
                {flow}
            </Button>
            <Stack spacing={-1} align={'center'} mt={4}>
                <Text fontWeight={600}>{title}</Text>
            </Stack>
        </Flex>
    );
};

function OrderFlow() {
    return (
        <Box bg={useColorModeValue('gray.200', 'gray.700')} id="howToOrder">
            <Container maxW={'6xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Cara Pemesanan</Heading>
                    {/* <Text>We have been working with clients around the world</Text> */}
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <HowOrderContainer>
                        <HowOrderContent>
                            <Image src={Flow1} width={'35vw'} height={'20vh'} />
                        </HowOrderContent>
                        <HowOrderAvatar
                            flow={'1'}
                            title={'Pesan dan Pilih Produk'}
                        />
                    </HowOrderContainer>
                    <HowOrderContainer>
                        <HowOrderContent>
                            <Image src={Flow2} width={'35vw'} height={'20vh'} />
                        </HowOrderContent>
                        <HowOrderAvatar
                            flow={'2'}
                            title={'Lakukan Pembayaran'}
                        />
                    </HowOrderContainer>
                    <HowOrderContainer>
                        <HowOrderContent>
                            <Image src={Flow3} width={'35vw'} height={'20vh'} />
                        </HowOrderContent>
                        <HowOrderAvatar
                            flow={'3'}
                            title={'Pesanan Diproses'}
                        />
                    </HowOrderContainer>
                    <HowOrderContainer>
                        <HowOrderContent>
                            <Image src={Flow4} width={'35vw'} height={'20vh'} />
                        </HowOrderContent>
                        <HowOrderAvatar
                            flow={'4'}
                            title={'Akses Akun Terkirim'}
                        />
                    </HowOrderContainer>
                    <HowOrderContainer>
                        <HowOrderContent>
                            <Image src={Flow5} width={'35vw'} height={'20vh'} />
                        </HowOrderContent>
                        <HowOrderAvatar
                            flow={'5'}
                            title={'Saatnya Nyantai'}
                        />
                    </HowOrderContainer>
                </Stack>
            </Container>
        </Box>
    );
}

export default OrderFlow;