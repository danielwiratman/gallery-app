import { View, Text, Button, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useIsFocused } from "@react-navigation/native";

const ScanScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);

    const isFocused = useIsFocused();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        console.log("Type: " + type + "\nData: " + data);
        if (data !== "") {
            navigation.navigate("Detail");
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const scrWidth = Dimensions.get("window").width;
    return (
        <View className="bg-black flex-1 justify-center items-center">
            {isFocused && (
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={{ width: scrWidth, height: (16 / 9) * scrWidth }}
                />
            )}

            <View />
        </View>
    );
};

export default ScanScreen;
