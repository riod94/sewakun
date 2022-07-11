import React from 'react'
import { Box, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/layout'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, useColorModeValue } from '@chakra-ui/react'

function Faq() {
    const data = [
        {
            'title': 'Kapan masa berlangganan di Sewakun aktif?',
            'description': <Box p={6} color={useColorModeValue("brand.600", "white")}>Masa berlangganan terhitung ketika Admin memberikan akun sharing atau link invitation. Masa berlangganan akan tetap berjalan walaupun kamu tidak meng-accept undangan yang telah dikirimkan.</Box>
        },
        {
            'title': 'Bagaimana mekanisme untuk melanjutkan langganan di Sewakun?',
            'description': <Box p={6} color={useColorModeValue("brand.600", "white")}>Seminggu dan maksimal sehari sebelum masa berlangganan habis, kamu akan menerima reminder perpanjangan melalui email & Whatsapp yang terdaftar. Jika kamu ingin melanjutkan masa berlangganan, silakan melakukan transfer ke rekening / e-wallet Sewakun dengan nominal yang diinformasikan.</Box>
        },
        {
            'title': 'Apa perbedaan User Payer dan User Member di Sewakun?',
            'description': <Box p={6} color={useColorModeValue("brand.600", "white")}>User Payer adalah user yang diberi wewenang untuk melakukan pendaftaran dan pembayaran langsung ke provider akun digital seperti Netflix. Pembayaran provider akan sepenuhnya diganti oleh Sewakun ketika pembayaran sudah terdebet. Sedangkan User Member, kamu tinggal terima jadi saja, proses pendaftaran ke provider dan pencarian teman berlangganan akan dihandle oleh Sewakun.</Box>
        },
        {
            'title': 'Metode pembayaran apa saja yang tersedia di Sewakun?',
            'description': <Box p={6} color={useColorModeValue("brand.600", "white")}>Saat ini metode pembayaran yang tersedia Manual Bank Transfer ke Bank BRI, Bank Jago, Bank Mandiri, BCA Digital dan e-wallet seperti Dana, Gopay, OVO dan link aja.</Box>
        },
        {
            'title': 'Bagaimana prosedur menjadi User Payer Sewakun?',
            'description': <Box p={6} color={useColorModeValue("brand.600", "white")}><ol>
                <li>Daftar dengan memilih paket User Payer. Misal User Payer Netflix</li>
                <li>Admin akan segera melakukan konfirmasi dan mengirimkan informasi akun digital untuk pendaftaran dan pembayaran akun yang ditentukan oleh Admin </li>
                <li>Lakukan pembayaran di provider menggunakan kartu kredit/debit/gopay (khusus Netflix)</li>
                <li>Setelah berhasil melakukan pembayaran, informasikan ke Admin</li>
                <li>Kemudian Admin akan mengirimkan pengganti dana yang terdebet</li>
            </ol></Box>
        },
    ];
    return (
        <Container id='faq' maxW={"6xl"} py={12}>
            <Stack py={8} spacing={0} align={'center'}>
                <Heading>Frequently Asked Questions (FAQ)</Heading>
            </Stack>
            <Stack pb={8}>
                <SimpleGrid columns={{ base:1, md: 2}} spacing={5}>
                    {
                        data.map((item, idx) => (
                            <Box key={idx.toString()}>
                                <Accordion allowToggle allowMultiple>
                                    <AccordionItem rounded={20}>
                                        <Heading as={"h2"}>
                                            <AccordionButton rounded={20} bg={useColorModeValue('brand.500', 'gray.500')} color='white' _hover={{ color: useColorModeValue('gray.50', 'grey.600') }}>
                                                <Box flex='1' textAlign='left'>
                                                    {item.title}
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </Heading>
                                        <AccordionPanel>
                                            {item.description}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Stack>
        </Container>
    )
}

export default Faq