import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import MuseumData from "../data/MuseumData.json";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailScreen = (props) => {
    const { route } = props;
    const barcodeText = route.params.data;
    const data = MuseumData.filter((data) => {
        return data.serial === barcodeText;
    })[0];
    
    return data ? (
        <ImageBackground className="flex-1" source={{ uri: data.image }}>
            <SafeAreaView style={styles.mainContainer}>
                <View>
                    <Image
                        style={styles.detailImage}
                        source={{ uri: data.image }}
                    />
                    <View
                        style={{
                            alignItems: "flex-start",
                            marginVertical: 8,
                        }}
                    >
                        <Text className="text-white" style={{ fontWeight: "bold", fontSize: 16 }}>
                            {data.name}
                        </Text>
                        <Text className="text-white">{data.artist}</Text>
                        <Text className="text-white">{data.year}</Text>
                        <Text className="text-white">{data.category}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    ) : (
        <View>
            <Text>The QR Code is not from this museum</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: "center",
        justifyContent: 'center',
        padding: 16,
    },
    detailImage: {
        width: 300,
        height: 300,
    },
});

export default DetailScreen;
