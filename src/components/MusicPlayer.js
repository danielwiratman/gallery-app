import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";

const MusicPlayer = () => {
    const [playing, setPlaying] = useState()

    const sound = useRef(new Audio.Sound());
    Audio.setAudioModeAsync({ staysActiveInBackground: true });

    useEffect(() => {
        loadAudio(require("../../assets/audios/love-of-god.mp3"));
    }, []);

    async function loadAudio(track) {
        await sound.current.unloadAsync();
        const checkLoading = await sound.current.getStatusAsync();

        if (checkLoading.isLoaded === false) {
            try {
                const result = await sound.current.loadAsync(track, {}, true);
                if (result.isLoaded === false) {
                    console.log("Hello")
                } 
            } catch (error) {}
        }
    }

    async function playAudio() {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === false) {
                    sound.current.playAsync();
                    setPlaying(true)
                }
            }
        } catch (error) {}
    }

    async function pauseAudio() {
        try {
            const result = await sound.current.getStatusAsync();
            if (result.isLoaded) {
                if (result.isPlaying === true) {
                    sound.current.pauseAsync();
                    setPlaying(false)
                }
            }
        } catch (error) {}
    }

    return (
        <View>
            {playing ? (
                <TouchableOpacity onPress={() => pauseAudio()}>
                    <FontAwesome name="pause" size={24} color="black" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => playAudio()}>
                    <FontAwesome name="play" size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default MusicPlayer;
