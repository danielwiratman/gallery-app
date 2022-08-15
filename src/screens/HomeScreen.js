import { View, Text, Button, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground className="flex-1" source={{uri: "https://media.cntraveler.com/photos/5a7b63dfb7a3db05bf40e1d8/1:1/w_1920%2Cc_limit/The-National-Gallery__2018_P3346_007.jpg"}}>
          <View className="flex-1 bg-black opacity-80 justify-center items-center">

        <Text className="text-4xl text-white font-bold text-center">Welcome to the The Gallery</Text>
          </View>
        </ImageBackground>
    );
};

export default HomeScreen;