import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import Slider from "@react-native-community/slider";
import { makeIntoUrl } from "../constants";

const MusicPlayer = ({ url, name }) => {
    const [playing, setPlaying] = useState();
    const [downloadProgress, setDownloadProgress] = useState();
    const [downloading, setDownloading] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [seek, setSeek] = useState(0);
    const [dur, setDur] = useState(Number.POSITIVE_INFINITY);
    const [curr, setCurr] = useState(0);

    const sound = useRef(new Audio.Sound());
    // Audio.setAudioModeAsync({ staysActiveInBackground: true });

    useEffect(() => {
        fetchData();
        return () => {
            console.log("Audio Unloaded");
            sound.current.unloadAsync();
        };
    }, []);

    async function fetchData() {
        const dir = await readDir();
        console.log(dir);
        if (dir.indexOf(name) !== -1) {
            setDownloaded(true);
            setDownloading(false);
            loadAudio({
                uri: FileSystem.documentDirectory + name,
            });
        } else {
            setDownloaded(false);
        }
        // loadAudio(require("../../assets/audios/love-of-god.mp3"))
    }

    useEffect(() => {
        if (downloadProgress) {
            console.log(Math.round(downloadProgress * 100));
        }
    }, [downloadProgress]);

    useEffect(() => {
        if (curr) {
            setSeek(curr / dur);
            console.log(String(Math.round(seek * 10000) / 100) + "%");
        }
    }, [curr]);

    async function readDir() {
        return await FileSystem.readDirectoryAsync(
            FileSystem.documentDirectory
        );
    }

    async function downloadAudio(sourceUrl) {
        console.log(sourceUrl);
        const resumableDownload = FileSystem.createDownloadResumable(
            sourceUrl,
            FileSystem.documentDirectory + name,
            {},
            (prog) => {
                const progress =
                    prog.totalBytesWritten / prog.totalBytesExpectedToWrite;
                setDownloadProgress(progress);
            }
        );
        setDownloading(true);
        await resumableDownload.downloadAsync();
        await fetchData();
    }

    async function loadAudio(track) {
        setLoaded(false);
        await sound.current.unloadAsync();
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false) {
            try {
                const result = await sound.current.loadAsync(track, {}, true);
                if (result.isLoaded === false) {
                    console.log("Error Loading Audio");
                } else {
                    setLoaded(true);
                    setDur(result.durationMillis);
                    sound.current.setOnPlaybackStatusUpdate((e) => {
                        let position = e.positionMillis;
                        setCurr(position);
                    });
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
                    setPlaying(true);
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
                    setPlaying(false);
                }
            }
        } catch (error) {}
    }

    return (
        <View className="flex-row items-center">
            {!downloading ? (
                downloaded ? (
                    playing ? (
                        <TouchableOpacity onPress={() => pauseAudio()}>
                            <FontAwesome name="pause" size={24} color="black" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => playAudio()}>
                            <FontAwesome name="play" size={24} color="black" />
                        </TouchableOpacity>
                    )
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            downloadAudio(makeIntoUrl(url));
                        }}
                    >
                        <FontAwesome name="download" size={24} color="black" />
                    </TouchableOpacity>
                )
            ) : (
                <ActivityIndicator color="black" />
            )}
            {}
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                value={seek}
                onValueChange={
                    !downloading && downloaded && loaded
                        ? async (val) =>
                              await sound.current.setPositionAsync(val * dur)
                        : null
                }
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                thumbTintColor="#000"
            />
            <TouchableOpacity
                onPress={async () => {
                    const status = await sound.current.getStatusAsync();
                    if (status.isPlaying) {
                        await sound.current.stopAsync();
                    }
                    if (status.isLoaded) {
                        await sound.current.unloadAsync();
                    }
                    const dir = await readDir();
                    if (dir.indexOf(name) !== -1) {
                        await FileSystem.deleteAsync(
                            FileSystem.documentDirectory + name
                        );
                        setDownloaded(false);
                        setSeek(0);
                    }
                }}
            >
                <FontAwesome name="trash" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default MusicPlayer;
