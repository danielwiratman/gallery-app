import React from "react";
import { Text, View } from "react-native";

const PaintingDetail = ({ left, right }) => {
    return (
        <View className="flex-row">
            <Text className="pl-6 font-bold" style={{width: 110}}>{left}</Text>
            <Text className="">:</Text>
            <Text className="pl-1">{right}</Text>
        </View>
    );
};

export default PaintingDetail;
