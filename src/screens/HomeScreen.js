import {
    View,
    Text,
    Button,
    ImageBackground,
    ScrollView,
    Dimensions,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { API_URL, makeIntoUrl } from "../constants";

const HomeScreen = ({ navigation }) => {
    const [searchBoxVal, setSearchBoxVal] = useState("");
    const { width: scrWidth, height: scrHeight } = Dimensions.get("window");
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchFromApi();
    }, []);

    function handleSearch(input) {
        let text = input.toLowerCase();
        let filteredName = allData.filter((item) => {
            return item.attributes.title.toLowerCase().match(text);
        });

        if (!text || text === "") {
            setFilteredData(allData);
        } else if (!Array.isArray(filteredName) && !filteredName.length) {
            setFilteredData([]);
        } else if (Array.isArray(filteredName)) {
            setFilteredData(filteredName);
        }
    }

    useEffect(() => {
        console.log("Total Item Count: " + allData.length);
    }, [allData]);

    async function fetchFromApi() {
        const result = await fetch(API_URL);
        const jsonData = await result.json();
        const arrayData = jsonData.data;

        setAllData(arrayData);
        setFilteredData(arrayData);
    }

    return (
        <ImageBackground
            className="flex-1"
            source={{
                uri: "https://media.cntraveler.com/photos/5a7b63dfb7a3db05bf40e1d8/1:1/w_1920%2Cc_limit/The-National-Gallery__2018_P3346_007.jpg",
            }}
        >
            <ScrollView
                className="flex-1"
                style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            >
                <View
                    className="justify-center items-center"
                    style={{ height: scrHeight }}
                >
                    <Text className="text-4xl text-white font-bold text-center">
                        Welcome to the The Gallery
                    </Text>
                </View>

                <View
                    style={{
                        height: scrHeight,
                        backgroundColor: "rgba(255,255,255,0.8)",
                    }}
                >
                    <View className="p-9">
                        <Text className="text-center font-semibold text-3xl">
                            Search
                        </Text>
                    </View>

                    <View className="mx-5 bg-white p-3 flex-row items-center">
                        <TextInput
                            className="flex-1 text-lg"
                            onChangeText={(e) => handleSearch(e)}
                        />
                        <TouchableOpacity onPress={() => setSearchBoxVal("")}>
                            <Entypo name="cross" size={28} color="#888" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 30 }} />

                    {filteredData.map((item) => {
                        return (
                            <TouchableOpacity
                                key={item.attributes.ref_name}
                                className="flex-row p-3 mx-5 my-2 bg-white "
                                onPress={() => {
                                    navigation.navigate("Detail", item);
                                }}
                            >
                                <Image
                                    className="aspect-square"
                                    source={{
                                        uri: makeIntoUrl(
                                            item.attributes.image.data
                                                .attributes.formats.thumbnail
                                                .url
                                        ),
                                    }}
                                />
                                <View style={{ width: 10 }} />
                                <View>
                                    <Text className="font-semibold text-base">
                                        {item.attributes.title}
                                    </Text>
                                    <Text>
                                        {
                                            item.attributes.category.data
                                                .attributes.title
                                        }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default HomeScreen;
