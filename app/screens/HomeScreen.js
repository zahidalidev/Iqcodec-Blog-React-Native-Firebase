import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Modal,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { WebView } from 'react-native-webview';

import { GetAllBlogs } from "../services/BlogServices";

function HomeScreen() {

    let [allPosts, setAllPosts] = useState()

    const getPosts = async () => {
        try {
            const data = await GetAllBlogs()
            console.log(data[0])
        } catch (error) {
            console.log("Getting posts error")
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <View>
            <Text>Home </Text>
        </View>
    );
};


export default HomeScreen;
