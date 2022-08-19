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
import PaintingDetail from "../components/PaintingDetail";

const DetailScreen = ({ route, navigation }) => {
    let item;
    if (route.params) {
        item = route.params.attributes;
    }

    return item ? (
        <View className="flex-1">
            <ScrollView className="pt-5">
                <Image
                    style={StyleSheet.absoluteFillObject}
                    source={{
                        uri: makeIntoUrl(item.image.data.attributes.url),
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
                            uri: makeIntoUrl(item.image.data.attributes.url),
                        }}
                        className="w-9/12 mb-3"
                        style={{ aspectRatio: 1 }}
                    />
                    <Text className="text-2xl font-bold">{item.title}</Text>
                    <MusicPlayer
                        url={item.audio.data.attributes.url}
                        name={item.ref_name}
                    />
                    <View style={{ height: 10 }} />
                </View>
                <View
                    style={{
                        flex: 5,
                        backgroundColor: "white",
                        paddingBottom: 40
                    }}
                    className="pt-4"
                >
                    <PaintingDetail left="Artist" right={item.artist.data.attributes.title} />
                    <PaintingDetail left="Year" right={item.year} />
                    <PaintingDetail left="Type" right={item.type} />
                    <PaintingDetail left="Category" right={item.category.data.attributes.title} />
                    <PaintingDetail left="Dimensions" right={item.dimensions} />
                    <Text className="px-6 mt-3" style={{}}>
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
