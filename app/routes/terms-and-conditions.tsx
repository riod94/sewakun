import * as React from 'react';
import { Box, Container, Heading, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/layout';
import { AppLayout } from '~/layouts/AppLayout';

function TermsAndConditions() {
    return (
        <AppLayout hideNavbar>
            <Container id='faq' maxW={"6xl"} py={16} my={6}>
                <Stack py={8} spacing={0} align={'center'}>
                    <Heading>Syarat dan Ketentuan</Heading>
                </Stack>
                <Stack>
                    <Text as='i'><b>Revisi Terakhir: 7 Juli 2022</b></Text>
                    <br />
                    <Text fontWeight='bold'>
                        Selamat datang di Sewakun!
                    </Text>
                    <Text>
                        Syarat dan ketentuan ini menguraikan aturan dan peraturan untuk penggunaan Situs Web Sewakun, yang terletak di sewakun.com.
                    </Text>
                    <Text>
                        Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini. Jangan terus menggunakan Sewakun jika Anda tidak setuju dengan semua syarat dan ketentuan yang tercantum di halaman ini.
                    </Text>
                    <br />
                    <Heading size='md'>Syarat Umum</Heading>
                    <Text>
                        Anda harus berumur minimal 13 tahun ketika mendaftar pada Sewakun. Anda wajib memberikan nama lengkap dan jelas, alamat, whatsapp dan alamat email yang valid dan informasi lain yang dibutuhkan dalam pendaftaran layanan Sewakun.
                        Anda berkewajiban untuk menjaga kemanan password Anda, Sewakun tidak akan bertanggung jawab pada kerugian dan kerusakan yang timbul akibat ketidakmampuan Anda dalam menjaga keamanan password Anda.
                    </Text>
                    <Text>
                        Anda tidak diijinkan menggunakan Sewakun untuk aktifitas ilegal dan melanggar hukum/undang-undang (termasuk undang-undang hak cipta) di wilayah Anda dan/ataupun wilayah hukum Indonesia. Anda bertanggung jawab atas semua aktivitas dan konten (data, text, foto, gambar, link) yang Anda unggah melalui akun Anda di Sewakun. Anda dilarang mengirimkan segalam macam worm, virus, kode yang bersifat merusak. Pelanggaran akan ketentuan ini akan mengakibatkan dihentikannya akun Anda.
                    </Text>

                    <br />
                    <Heading size='md'>Penggunaan Layanan</Heading>
                    <Box>
                        <Text>
                            Kami menyediakan beberapa layanan yang sudah memiliki aturan penggunaan berdasarkan ketentuan yang diterbitkan oleh masing-masing provider. Dengan menggunakan layanan yang ada di Platform Sewakun, artinya Anda berkewajiban penuh untuk mengikuti aturan yang diterbitkan oleh masing-masing provider yang telah tersedia di Platform Sewakun.
                        </Text>
                        <Text>
                            Ada beberapa ketentuan layanan pengguna untuk masing-masing provider yang sudah disediakan di Sewakun diantaranya sebagai berikut.
                        </Text>
                        <UnorderedList>
                            <ListItem>Netflix, bisa dilihat pada <Link href='https://help.netflix.com/legal/termsofuse' target={'_blank'} color='blue.500'>tautan berikut.</Link></ListItem>
                            <ListItem>Youtube, bisa dilihat pada <Link href='https://www.youtube.com/t/terms' target={'_blank'} color='blue.500'>tautan berikut.</Link></ListItem>
                            <ListItem>Spotify, bisa dilihat pada <Link href='https://www.spotify.com/id/legal/end-user-agreement/' target={'_blank'} color='blue.500'>tautan berikut.</Link></ListItem>
                            <ListItem>Disney+ Hotstar, bisa dilihat pada <Link href='https://www.hotstar.com/id/terms-of-use' target={'_blank'} color='blue.500'>tautan berikut.</Link></ListItem>
                        </UnorderedList>
                        <Text>
                            Anda juga berkewajiban secara penuh untuk mengikuti segala macam aturan yang telah ditentukan oleh Sewakun.
                        </Text>
                    </Box>
                    <br />
                    <Heading size='md'>User Payer</Heading>
                    <Text>
                        User Payer merupakan user yang diberikan kewenangan oleh Sewakun untuk melakukan proses administrasi dan/atau melakukan pembayaran ke provider yang telah disediakan oleh Sewakun.
                        Adapun prosedur yang Anda lakukan jika berminat menjadi User Payer harus mengikuti segala instruksi yang diberikan oleh admin dan/atau customer service Sewakun.
                        Dengan menjadi User Payer, user secara sadar telah menyetujui pengelolaan akun oleh Sewakun termasuk mengelola member dan membagikan akses ke member dalam grup akun tersebut.
                    </Text>
                    <br />
                    <Heading size='md'>Pembayaran</Heading>
                    <Text>
                        Sewakun menyediakan otomatis dan manual, metode otomatis sedang dalam proses pengembangan sedangkan untuk metode pembayaran manual transfer tersedia transfer ke Bank BRI, Bank Mandiri, BCA Digital dan Bank Jago atau ke e-wallet seperti Dana, Gopay, OVO dan Linkaja. Dengan memilih pembayaran menggunakan metode manual, pengguna bersedia melakukan pembayaran dengan total nominal sesuai dengan pesanan yang dipesan ditambah 3 kode unik. Kode unik bertujuan untuk memudahkan sistem dalam mengolah transaksi. Dan dengan memilih pembayaran metode manual, pengguna setuju nominal 3 kode unik menjadi keuntungan Sewakun.
                    </Text>
                    <br />
                    <Heading size='md'>Cookies</Heading>
                    <Text>
                        Kami menerapkan penggunaan cookie. Dengan mengakses Sewakun, Anda setuju untuk menggunakan cookie sesuai dengan <Link href='privacy-policy' target={'_blank'} color='blue.500'>Kebijakan Privasi Sewakun</Link>.
                    </Text>
                    <Text>
                        Sebagian besar situs web interaktif menggunakan cookie untuk memungkinkan kami mengambil detail pengguna untuk setiap kunjungan. Cookie digunakan oleh situs web kami untuk mengaktifkan fungsionalitas area tertentu untuk memudahkan orang mengunjungi situs web kami. Beberapa mitra afiliasi/iklan kami juga dapat menggunakan cookie.
                    </Text>
                    <br />
                    <Heading size='md'>Hak Konten dan Kekayaan Intelektual</Heading>
                    <Text>
                        Kecuali dinyatakan lain, Sewakun dan/atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi di Sewakun. Semua hak kekayaan intelektual dilindungi. Anda dapat mengakses ini dari Sewakun untuk penggunaan pribadi Anda dengan batasan yang diatur dalam syarat dan ketentuan ini.
                    </Text>

                    <br />
                    <Box>
                        <Heading size='sm'>Anda tidak harus:</Heading>
                        <UnorderedList>
                            <ListItem>Publikasikan ulang materi dari Sewakun</ListItem>
                            <ListItem>Menjual, menyewakan, atau mensublisensikan materi dari Sewakun</ListItem>
                            <ListItem>Mereproduksi, menggandakan, atau menyalin materi dari Sewakun</ListItem>
                            <ListItem>Distribusi ulang konten dari Sewakun</ListItem>
                            <ListItem>Perjanjian ini akan dimulai pada tanggal Perjanjian ini.</ListItem>
                        </UnorderedList>

                    </Box>

                    <br />
                    <Heading size='sm'>Reservasi Hak:</Heading>
                    <Text>
                        Kami berhak untuk meminta Anda menghapus semua tautan atau tautan tertentu ke Situs Web kami. Anda menyetujui untuk segera menghapus semua tautan ke Situs Web kami berdasarkan permintaan. Kami juga berhak untuk mengubah syarat dan ketentuan ini dan kebijakan penautannya setiap saat. Dengan terus menautkan ke Situs Web kami, Anda setuju untuk terikat dan mengikuti syarat dan ketentuan penautan ini.
                    </Text>

                    <br />
                    <Heading size='sm'>Penghapusan tautan dari situs web kami:</Heading>
                    <Text>
                        Jika Anda menemukan tautan apa pun di Situs Web kami yang menyinggung karena alasan apa pun, Anda bebas untuk menghubungi dan memberi tahu kami kapan saja. Kami akan mempertimbangkan permintaan untuk menghapus tautan, tetapi kami tidak berkewajiban untuk atau lebih atau untuk menanggapi Anda secara langsung.
                    </Text>
                    <Text>
                        Kami tidak memastikan bahwa informasi di situs web ini benar. Kami tidak menjamin kelengkapan atau keakuratannya, kami juga tidak berjanji untuk memastikan bahwa situs web tetap tersedia atau materi di situs web selalu diperbarui.
                    </Text>

                    <Heading size='sm'>Kontak Kami</Heading>
                    <Text>
                        Anda dapat menghubungi Kami terkait dengan Kebijakan Privasi dan Ketentuan Penggunaan melalui email <Link href='mailto:halo@sewakun.com' target={'_blank'} color='blue.500'>halo@sewakun.com.</Link>
                    </Text>
                </Stack>
            </Container>
        </AppLayout >
    )
}

export default TermsAndConditions