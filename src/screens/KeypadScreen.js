import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const KeypadScreen = () => {
    const [numList, setNumList] = useState([0]);

    // useEffect(() => {
    //     console.log(numList);
    // }, [numList]);

    return (
        <SafeAreaView className="px-3 flex-1 bg-white justify-center items-center">
            <Text className="bg-slate-500 w-full text-white text-9xl text-center p-5 pt-10 my-3">
                {numList.slice(1, numList.length).join("")}
            </Text>
            <View className="flex-row my-3 w-full justify-between">
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 1])}
                >
                    <Text className="text-white font-semibold text-2xl text text-center">
                        1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 2])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 3])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        3
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row my-3 w-full justify-between">
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 4])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        4
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 5])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        5
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 6])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        6
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row my-3 w-full justify-between">
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 7])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        7
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 8])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        8
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 9])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        9
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row my-3 w-full justify-between">
                <View className="w-[110px]" />
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px]"
                    onPress={() => setNumList(numList.length >= 4 ? [...numList] : [...numList, 0])}
                >
                    <Text className="text-white font-semibold text-2xl text-center">
                        0
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="py-5 bg-gray-600 w-[110px] items-center"
                    onPress={() =>
                        setNumList(
                            numList.length === 1
                                ? [0]
                                : () => {
                                      numList.pop();
                                      return [...numList];
                                  }
                        )
                    }
                >
                    <Ionicons name="ios-backspace" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default KeypadScreen;
