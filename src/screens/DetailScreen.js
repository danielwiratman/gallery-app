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

const DetailScreen = ({ route, navigation }) => {
    const barcodeText = route.params.data;
    let data = MuseumData.filter((data) => {
        return data.serial === barcodeText;
    })[0];
    const [aspectRatio, setAspectRatio] = useState();

    if (!data) {
        data = {
            name: "Rustic Cotton Chair",
            category: "chinese_painting",
            artist: "Steven Koehl",
            year: 1435,
            description:
                "Occaecat ex consectetur anim reprehenderit enim elit exercitation incididunt ea voluptate tempor qui aute. Ad qui dolore magna pariatur cupidatat qui incididunt. Ad do id sint Lorem commodo. Qui eu consequat esse qui consequat excepteur. Excepteur dolore cillum dolore aliqua tempor.",
            image: "https://images.wallpaperscraft.com/image/single/autumn_landscape_painting_river_wood_47263_1600x900.jpg",
            serial: "2e1a8156-09ee-4d44-a0b6-d3b4943a61af",
        };
    }

    useEffect(() => {
        Image.getSize(data.image, (width, height) =>
            setAspectRatio(width / height)
        );
    }, []);

    return data ? (
        <View className="flex-1">
            <Image
                style={StyleSheet.absoluteFillObject}
                source={{ uri: data.image }}
            />
            <View
                style={[
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "#fffc" },
                ]}
            />
            <View className="flex-1 items-center justify-center border-b-[1px] border-b-slate-400">
                <Image
                    source={{ uri: data.image }}
                    className="w-9/12 mb-3"
                    style={{ aspectRatio: aspectRatio }}
                />
                <Text className="text-2xl font-bold">{data.name}</Text>
                <Text>Artist: {data.artist}</Text>
                <Text
                    className="mb-5
                "
                >
                    Category: {data.category}
                </Text>
                <MusicPlayer url="/uploads/The_Love_Of_God_cf9952edc0.mp3" />
            </View>
            <View style={{ flex: 5, backgroundColor: "white" }}>
                <ScrollView className="px-6 my-3">
                    <Text>{data.description}</Text>
                </ScrollView>
            </View>
        </View>
    ) : (
        <View className="flex-1 items-center justify-center">
            <Text>No items found using this QR Code.</Text>
        </View>
    );
};

export default DetailScreen;
