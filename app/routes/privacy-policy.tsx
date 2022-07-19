import * as React from 'react';
import { Container, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { AppLayout } from '~/layouts/AppLayout';

function PrivacyPolicy() {
    return (
        <AppLayout hideNavbar>
            <Container id='faq' maxW={"6xl"} py={16} my={6}>
                <Stack py={8} spacing={0} align={'center'}>
                    <Heading>Kebijakan Privasi</Heading>
                </Stack>
                <Stack>
                    <Heading size='md'>Kebijakan Privasi Sewakun</Heading>
                    <Text>
                        Sewakun, dapat diakses dari www.sewakun.com, salah satu prioritas utama kami adalah privasi pengunjung kami.Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Sewakun dan bagaimana kami menggunakannya. Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami. Di www.sewakun.com kami menganggap bahwa privasi dari informasi pribadi Anda adalah hal yang penting.Dan inilah keterangan mengenai informasi apa saja yang kami terima dan kami kumpulkan pada saat Anda mengunjungi www.sewakun.com dan bagaimana kami menyimpan serta menjaga informasi tersebut.Kami tegaskan bahwa kami tidak akan pernah memberikan informasi tersebut kepada pihak ketiga.
                    </Text>
                    <br />
                    <Heading size='md'>File Log</Heading>
                    <Text>
                        Sewakun mengikuti prosedur standar menggunakan file log.File - file ini mencatat pengunjung ketika mereka mengunjungi situs web.Semua perusahaan hosting melakukan ini dan merupakan bagian dari analisis layanan hosting.Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet(IP), jenis browser, Penyedia Layanan Internet(ISP), cap tanggal dan waktu, halaman rujukan / keluar, dan mungkin jumlah klik.Ini tidak terkait dengan informasi apa pun yang dapat diidentifikasi secara pribadi.Tujuan dari informasi ini adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis.Kebijakan Privasi kami dibuat dengan bantuan Generator Kebijakan Privasi.
                    </Text>
                    <br />
                    <Heading size='md'>Cookie</Heading>
                    <Text>
                        Seperti situs web lainnya, Sewakun menggunakan 'cookies'. Cookie ini digunakan untuk menyimpan informasi termasuk preferensi pengunjung, dan halaman di situs web yang diakses atau dikunjungi pengunjung. Informasi tersebut digunakan untuk mengoptimalkan pengalaman pengguna dengan menyesuaikan konten halaman web kami berdasarkan jenis browser pengunjung dan / atau informasi lainnya.
                    </Text>
                    <Text>
                        Untuk informasi lebih umum tentang cookie, silakan baca artikel "Cookies" dari Pembuat Kebijakan Privasi.
                    </Text>
                    <br />
                    <Heading size='md'>Informasi Anak</Heading>
                    <Text>
                        Bagian lain dari prioritas kami adalah menambahkan perlindungan bagi anak - anak saat menggunakan internet. Kami mendorong orang tua dan wali untuk mengamati, berpartisipasi, dan / atau memantau dan memandu aktivitas online mereka.
                    </Text>
                    <Text>
                        Sewakun tidak secara sadar mengumpulkan Informasi Identifikasi Pribadi apa pun dari anak di bawah 13 tahun.Jika Anda merasa anak Anda memberikan informasi semacam ini di situs web kami, kami sangat menganjurkan Anda untuk menghubungi kami segera dan kami akan melakukan upaya terbaik kami untuk segera menghapus informasi tersebut dari catatan kami.
                    </Text>
                    <br />
                    <Heading size='md'>Kebijakan Privasi Online</Heading>
                    <Text>
                        Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami dan berlaku untuk pengunjung situs web kami sehubungan dengan informasi yang mereka bagikan dan / atau kumpulkan di Sewakun.Kebijakan ini tidak berlaku untuk informasi apa pun yang dikumpulkan secara offline atau melalui saluran selain situs web ini.
                    </Text>
                    <br />
                    <Heading size='md'>Izin</Heading>
                    <Text>
                        Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui <Link href='terms-and-conditions' target={'_blank'} color='blue.500'>Syarat dan Ketentuan Sewakun</Link>.
                    </Text>
                </Stack>
            </Container>
        </AppLayout>
    )
}

export default PrivacyPolicy