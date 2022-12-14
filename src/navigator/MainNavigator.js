import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DetailScreen from "../screens/DetailScreen";
import TabsNavigator from "./TabsNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
};

export default MainNavigator;
