import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";
import KeypadScreen from "../screens/KeypadScreen";
import ScanScreen from "../screens/ScanScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { height: 60, paddingTop: 8 },
                tabBarLabelStyle: { paddingBottom: 8 },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Keypad"
                component={KeypadScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-keypad" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-scan" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="contacts"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default TabsNavigator;
