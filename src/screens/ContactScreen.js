import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const ContactScreen = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <TouchableOpacity className="flex-row p-5 m-3" style={{backgroundColor: '#128c7e'}}>
                <FontAwesome name="whatsapp" size={30} color="white" />
                <Text className="text-lg ml-3 text-white">Connect on Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row p-5 m-3" style={{backgroundColor: '#dd2a7b'}}>
                <FontAwesome name="instagram" size={30} color="white" />
                <Text className="text-lg ml-3 text-white">Follow on Instagram</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ContactScreen;
