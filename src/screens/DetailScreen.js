import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MuseumData from "../data/MuseumData.json";
import MusicPlayer from "../components/MusicPlayer";
import { SafeAreaView } from "react-native-safe-area-context";
import { makeIntoUrl } from "../constants";

const DetailScreen = ({ route, navigation }) => {
    // const barcodeText = route.params.data;
    // let data = MuseumData.filter((data) => {
    //     return data.serial === barcodeText;
    // })[0];
    // const [aspectRatio, setAspectRatio] = useState();

    // if (!data) {
    //     data = {
    //         name: "Rustic Cotton Chair",
    //         category: "chinese_painting",
    //         artist: "Steven Koehl",
    //         year: 1435,
    //         description:
    //             "Occaecat ex consectetur anim reprehenderit enim elit exercitation incididunt ea voluptate tempor qui aute. Ad qui dolore magna pariatur cupidatat qui incididunt. Ad do id sint Lorem commodo. Qui eu consequat esse qui consequat excepteur. Excepteur dolore cillum dolore aliqua tempor.",
    //         image: "https://images.wallpaperscraft.com/image/single/autumn_landscape_painting_river_wood_47263_1600x900.jpg",
    //         serial: "2e1a8156-09ee-4d44-a0b6-d3b4943a61af",
    //     };
    // }

    // useEffect(() => {
    //     Image.getSize(data.image, (width, height) =>
    //         setAspectRatio(width / height)
    //     );
    // }, []);

    let item;
    if (route.params) {
        item = route.params.attributes;
    }

    if (!item) {
        item = {
            name: "beautiful-sea",
            title: "Beautiful Sea",
            year: 1990,
            description:
                "Lukisan cat minyak di atas kanvas berskala menengah itu dipenuhi oleh langit malam yang dipenuhi bulan dan bintang. Sehingga dua objek itu menempati tiga perempat bidang gambar yang tampak bergolak, bahkan gelisah.\n\nDikutip dari Moma Learning, lukisan Starry Night digambarkan dengan pola berputar-putar yang tampak menggelinding di permukaannya seperti gelombang. Kemudian, dipenuhi dengan bola-bola terang, termasuk bulan sabit di ujung kanan.\n\nTidak hanya itu, terdapat pula Venus, bintang pagi di kiri tengah, serta dikelilingi oleh lingkaran konsentris atau pusat yang sama dengan cahaya putih dan kuning.\n\nAkan tetapi keasliannya diragukan sejak 1970. Dilansir dari Independent, sekarang keraguan itu telah dihilangkan setelah adanya penelitian yang menemukan fakta bahwa lukisan itu memang dilukis oleh master Belanda setelah ia pulih di RSJ Saint-Remy.\n\nPihak Museum Vincent Van Gogh Louis van Tilborgh mengatakan, lukisan cat minyak di atas kanvas pelukis yang tampak sedih itu selesai pada akhir musim panas 1889, sedangkan Vincent Van Gogh berada di rumah sakit jiwa di Prancis selatan.\n\nKarya ini merupakan lukisan satu-satunya yang dibuat Vincent Van Gogh saat dia menderita psikosis. Lukisan ini didominasi oleh warna coklat kehijauan yang suram, dan menampilkan artis dengan wajah yang tidak berekspresi.\n\nLouis van Tilborgh menambahkan, dia mungkin membuat karya ini agar dapat mendamaikan dirinya dengan apa dengan apa yang dia lihat di cermin, yaitu seseorang yang tidak dia inginkan.\n\nMeski demikian, hal itu merupakan bagian dari apa yang membuat lukisan itu begitu luar biasa dan bahkan dijadikan sebagai terapi.",
            serial: "item",
            createdAt: "2022-08-15T23:57:07.164Z",
            updatedAt: "2022-08-15T23:57:08.447Z",
            publishedAt: "2022-08-15T23:57:08.441Z",
            images: {
                data: [
                    {
                        id: 15,
                        attributes: {
                            name: "photo1.jpg",
                            alternativeText: "photo1.jpg",
                            caption: "photo1.jpg",
                            width: 600,
                            height: 600,
                            formats: {
                                thumbnail: {
                                    name: "thumbnail_photo1.jpg",
                                    hash: "thumbnail_photo1_4457ed6e5f",
                                    ext: ".jpg",
                                    mime: "image/jpeg",
                                    path: null,
                                    width: 156,
                                    height: 156,
                                    size: 7.59,
                                    url: "/uploads/thumbnail_photo1_4457ed6e5f.jpg",
                                },
                                small: {
                                    name: "small_photo1.jpg",
                                    hash: "small_photo1_4457ed6e5f",
                                    ext: ".jpg",
                                    mime: "image/jpeg",
                                    path: null,
                                    width: 500,
                                    height: 500,
                                    size: 58.45,
                                    url: "/uploads/small_photo1_4457ed6e5f.jpg",
                                },
                            },
                            hash: "photo1_4457ed6e5f",
                            ext: ".jpg",
                            mime: "image/jpeg",
                            size: 66.69,
                            url: "/uploads/photo1_4457ed6e5f.jpg",
                            previewUrl: null,
                            provider: "local",
                            provider_metadata: null,
                            createdAt: "2022-08-15T23:54:32.847Z",
                            updatedAt: "2022-08-15T23:54:32.847Z",
                        },
                    },
                ],
            },
            audio: {
                data: {
                    id: 17,
                    attributes: {
                        name: "i-need-thee-every-hour-22188.mp3",
                        alternativeText: "i-need-thee-every-hour-22188.mp3",
                        caption: "i-need-thee-every-hour-22188.mp3",
                        width: null,
                        height: null,
                        formats: null,
                        hash: "i_need_thee_every_hour_22188_e40bfa55be",
                        ext: ".mp3",
                        mime: "audio/mpeg",
                        size: 7706.33,
                        url: "/uploads/i_need_thee_every_hour_22188_e40bfa55be.mp3",
                        previewUrl: null,
                        provider: "local",
                        provider_metadata: null,
                        createdAt: "2022-08-15T23:54:33.047Z",
                        updatedAt: "2022-08-15T23:54:33.047Z",
                    },
                },
            },
            artist: {
                data: {
                    id: 1,
                    attributes: {
                        name: "leonardo-da-vinci",
                        title: "Leonardo Da Vinci (1452-1519)",
                        description:
                            "Leonardo da Vinci (lahir di Vinci, propinsi Firenze, Italia, 15 April 1452 – meninggal di Clos Lucé, Perancis, 2 Mei 1519 pada umur 67 tahun) merupakan arsitek, musisi, penulis, pematung, dan pelukis Renaisans Italia. Ia digambarkan sebagai arketipe \"manusia renaisans\" dan sebagai genius universal.\n\nLeonardo terkenal karena lukisannya yang piawai, seperti Jamuan Terakhir dan Mona Lisa. Ia juga dikenal karena mendesain jumlah ciptaan yang mengantisipasi teknologi modern tetapi jarang dibuat semasa hidupnya, sebagai contoh ide-idenya tentang tank dan mobil yang dituangkannya lewat gambar-gambar dwiwarna. Selain itu, ia juga ikut memajukan ilmu anatomi, astronomi, dan teknik sipil bahkan kuliner.\n\nLatar belakang\nLeonardo merupakan anak dari Ser Piero Da Vinci dan Caterina. Ia memiliki nama lengkap Leonardo di Ser Piero da Vinci yang berarti Leonardo putra Ser Piero dari kota Vinci.\n\nPada usia belia, Leonardo sudah berlatih melukis dengan Andrea del Verrocchio dan mulai melukis di Firenze. Berada kabar mengisahkan Verrochio menyatakan pensiun melukis setelah menyaksikan bahwa lukisan muridnya yang satu ini bertambah bagus dari lukisannya sendiri. Selain dijadikan pelukis, Leonardo juga sanggup menunjukkan kemampuannya di anggota yang lain.\n\nPada tahun 1481 Leonardo pindah ke Milan bagi memainkan pekerjaan dengan Raja muda (Duke) di sana. Hasil karyanya selama di Milan yang paling termashur merupakan Kuda Sforza yang dikerjakannya selama kurang bertambah 11 tahun. Namun di situ ia tidak hanya melukis dan menciptakan patung saja, melainkan juga mengubah jalan-jalan sungai dan membangun kanal-kanal, serta menghibur Duke dengan memainkan lut dan bernyanyi. Lalu ia memainkan pekerjaan bagi Raja Louis XII dari Perancis di Milan dan bagi Paus Leo X di Roma.\n\nSementara itu ia menolong Raphael dan Michaelangelo dalam mendesain katedral Santo Petrus. Dalam hidupnya Leonardo sangat tertarik pada ilmu ilmu. Ia mulai mempelajari burung terbang dan mulai mendesain mesin terbang. Pemikirannya itu terdapat dalam buku catatanya sebanyak 7.000 halaman.\n\nDi dalam buku itu juga terdapat sketsa tentang studi tubuh manusia. Pada zaman itu, anatomi tubuh manusia tak bertambah dari sekadar bertambah kurang karena siapapun dilarang keras membedah jenazah. Dengan kenekatannya mencuri-curi kesempatan membedah-bedah tubuh orang mati, di yang belakang sekali hari tingkah laku yang dibuat yang tak lazim di zamannya ini memberikan kontribusi yang sangat luhur bagi dunia kedokteran.\n\nMahakaryanya, Jamuan Terakhir (The Last Supper) pada tahun 1495 hingga tahun 1497 yang dilukis pada dinding biara Santa Maria di Milan, kini sudah rusak dampak dimakan waktu. Lukisan terkenal lainnya merupakan Mona Lisa yang kini terdapat di musium Louvre Paris.\n\nSebuah spekulasi yang beredar tentang siapa sesungguhnya Mona Lisa selang lain menyatakan bahwa citra perempuan tersebut merupakan hasil rekaan wajah Da Vinci sendiri. Spekulasi yang lain menyatakan bahwa perempuan tersebut memang pernah berada, seorang istri pedagang.\n\nLeonardo da Vinci wafat di Clos Lucé, Perancis pada tanggal 2 Mei 1519, dan dimakamkan di Kapel St. Hubert di kastel Amboise, Perancis.\n\nSetelah meninggal dunianya, sangat kuat ditengarai bahwa Leonardo pernah memegang peranan sebagai orang terkuat di sebuah organisasi rahasia bernama Priory of Sion yang berlaskarkan Knights Templar. Apakah organisasi rahasia ini? Jumlah fakta mengarahkan pada suatu dugaan bahwa Priory of Sion merupakan sebuah organisasi yang menjaga ketat-ketat rahasia sejarah kristiani menurut versi yang berlainan dari kitab Injil yang beredar di penduduk. Yang dirahasiakan merupakan mengenai siapa mesias yang sesungguhnya dan probabilitas Yesus tidak menjalankan hukum selibat.\n\nDalam versi yang sempat menimbulkan kontroversi ini diyakini bahwa Mesias yang sesungguhnya merupakan Santo Yohanes Pembaptis, hal tersebut tersirat dari kekerapan Da Vinci melukis Sang Santo dalam posisi telunjuk menuding ke atas sebagai simbolisasi 'Putra Allah'.\n\nVersi yang tak kalah mengagetkannya merupakan probabilitas Maria Magdalena si kesan perempuan pelacur diperistri oleh Yesus. Namun seluruh hal tersebut tidak terbukti kebenarannya, hingga ketika ini, sehingga tudingan ini hanya dianggap sebagai langkah bagi memojokkan posisi umat Kristiani.\n\nPenjelasan\nSeniman\nLukis tidak saja mencerminkan luarnya benda, argumen Da Vinci: yang dimaksud dengan lukis merupakan segala sesuatu yang terkandung di dalamnya, yang dasarnya alami dan tidak dapat dilihat oleh mata telanjang manusia, lalu diekspresikan dalam bentuk gambar.\n\nMenurut Da Vinci, Ilmu ilmu dan lukis berada hubungannya, misalnya gambar manusia, ia pernah memainkan sebuah percobaan (membedah mayat supaya dapat mengerti anatomi tubuh manusia).\n\nSehingga dalam lukisannya, ia selalu dengan tepat menangkap gerakan otot di bawah lapisan kulit, maka hasil lukisannya sangat halus, dan cermat, contohnya: sketsa tangannya yang sedang tersimpan hingga kini, setiap goresannya sangat indah, goresan penanya juga jelas, hal ini jarang dijumpai pada ketika itu. Terutama pada anggota mata dan rambut, tidak saja lembut, juga mengandung suatu daya tarik. Ini menunjukan kedewasaan, kemampuan lukis tingkat tinggi.\n\nPenemu\nDa Vinci tidak saja seorang seniman, juga seorang ilmuwan, tukang mesin, dan penemu. Dalam sketsanya, terdapat gambar rancangan kapal terbang dan mesin penggerak ke atas, juga sedang terdapat sketsa 'Metode Terbang Burung'. Seluruh ini hasil penemuan dari pengamatan metode terbang burung. Kesimpulan dari penelitian ini, ia menemukan hubungan luhur kecilnya sayap dengan berat badan manusia. Meskipun tidak karena teori ini manusia mampu terbang, namun ia memberi beberapa ajar metode terbang burung.\n\nDari sketsa penelitian kapal selam mampu terlihat, mula - mula ia tertarik pada arus cairan. Yang belakang sekali dengan serius meneliti ikan - ikan yang berenang melawan arus serta hambatan tekanan arus yang terjadi pada kapal, dan meninggalkan sejumlah lima sketsa mengenai badan kapal, yang luhur pengaruhnya pada masa sekarang.\n\nPada jaman Da Vinci, sudah berada jam waktu, tetapi rancangan jam Da Vinci berlainan dan memiliki ciri khas, jam lain biasanya menunjukkan jam, menit,dan detik tetapi kepunyaan Da Vinci , anggota luar menunjukkan keadaan bulan, seperti bundar, setengah bundar dan lain - lain, anggota kiri atas menunjukkan 'menit', anggota kanan atas menunjukkan 'detik'\n\nArsitektur\nZaman Renaissance disebut: 'Zaman Keemasan Pembangunan', Da Vinci juga meninggalkan jumlah sketsa Arsitek. Dalam rancangan kotanya dicantumkan mengenai terowong cairan, juga pelebaran jalan, arus udara dan cahaya sesuai dengan rancangan kota zaman sekarang.\n\nTahun 1483, kebakaran luhur terjadi di Milan dan wabah penyakit di Eropa menyebabkan puluhan ribu orang meninggal, Da Vinci pernah mengusulkan pada Il Moro bagi membangun kembali Milan, probabilitas karena metode pemikiran melampaui mutu masa itu, juga biaya yang dibutuhkna terlalu jumlah, sehingga cita-citanya tak terwujud. Tetapi tak jeda - jedanya ia mempelajari, menyelidiki dan mendiskusikan teknik pembangunan.\n\nPerpaduan bakat seni dan ilmu\nMeskipun Da Vinci adaah ilmuwan yang luar biasa, tetapi pada dasarnya, ia sedang tetap milik dunia seni. Ia memadukan ilmu dengan seni, dan tidak karena mengejar kebenaranilmu lalu melupakan keindahan.\n\nKetika itu jumlah seniman yang menggemari teknik gambar nyata. Orang - orang ini meski mampu dengan tepat menggambar bentuk dari anggota sesuatu, namun melupakan anggota keindahan yang utuh. Sehingga memberi kesan melilit. Pada kenyataannya, perkembangan seni di zaman pemulihan adat, perpaduan selang sifat nyata dan mempertahankan keindahan menyeluruh secara untuh, hanya Da Vinci yang paling menonjol.\n\nMeski sepanjang hidup Da Vinci tak jeda - jedanya mengejar kemauan dan tak pernah mengenal puas, sehingga meninggalkan setumpuk sketsa, namun karya yang aci - aci habis tidaklah jumlah, hal ini amat disayangkan bagi sang genius dan bagi dunia.\n\nPada kenyataannya, seorang pakar matematka sahabatnya, sering menjuluki ia sebagai 'Pelukis,Pemusik';murid Michelangelo, pernah menulis tentang Da Vinci dalam 'Buku Para Pelukis sebagai berikut; Da Vinci pernah menekuni anggota musik. Pada dasarnya ia memiliki hati yang luhur. Dan sambil memainkan biola, ia bernyanyi gembira.\n\nDa Vinci pernah membawa alat musik hasil pekerjaannya sendiri, dipertontonkan di depan Il Moro di Milan. Menurut catatan, alat musik ini terbuat dari perak, bentuknya seperi tulang kepala kuda, suara yang dihasilkan, amat nyaring.\n\nDari seluruh dapat dikenal, meskipun tidak berada peninggalan Da Vinci yang berupa catatan lagu not balok tetapi keberhasilan dalam musik, juga tidak mampu ditandingi orang biasa.\n",
                        createdAt: "2022-08-15T23:49:26.124Z",
                        updatedAt: "2022-08-15T23:49:27.160Z",
                        publishedAt: "2022-08-15T23:49:27.158Z",
                    },
                },
            },
            category: {
                data: {
                    id: 1,
                    attributes: {
                        name: "western-painting",
                        title: "Western Painting",
                        createdAt: "2022-08-15T23:52:22.954Z",
                        updatedAt: "2022-08-15T23:52:40.919Z",
                        publishedAt: "2022-08-15T23:52:40.918Z",
                    },
                },
            },
        };
    }

    return item ? (
        <View className="flex-1">
            <ScrollView className="pt-5">
                <Image
                    style={StyleSheet.absoluteFillObject}
                    source={{
                        uri: makeIntoUrl(
                            item.images.data[0].attributes.formats.small.url
                        ),
                    }}
                />
                <View
                    style={[
                        StyleSheet.absoluteFillObject,
                        { backgroundColor: "#fffc" },
                    ]}
                />
                <View className="flex-1 items-center justify-center border-b-[1px] border-b-slate-400">
                    <Image
                        source={{
                            uri: makeIntoUrl(
                                item.images.data[0].attributes.formats.small.url
                            ),
                        }}
                        className="w-9/12 mb-3"
                        style={{ aspectRatio: 1 }}
                    />
                    <Text className="text-2xl font-bold">{item.title}</Text>
                    <Text>Artist: {item.artist.data.attributes.title}</Text>
                    <Text>Category: {item.category.data.attributes.title}</Text>
                    <MusicPlayer
                        url={item.audio.data.attributes.url}
                        name={item.name}
                    />
                    <View style={{ height: 10 }} />
                </View>
                <View
                    style={{
                        flex: 5,
                        backgroundColor: "white",
                        paddingBottom: 40,
                    }}
                >
                    <Text className="px-6 my-3" style={{}}>
                        {item.description}
                    </Text>
                </View>
            </ScrollView>
        </View>
    ) : (
        <View className="flex-1 items-center justify-center">
            <Text>No items found using this QR Code.</Text>
        </View>
    );
};

export default DetailScreen;
