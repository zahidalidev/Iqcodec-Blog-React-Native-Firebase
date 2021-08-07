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

    const getPosts = async () => {
        try {
            const data = await GetAllBlogs()
            // let tempData = [];
            // for(let i = 0; i < data.lenght; i++){
            //     let tempObj = {

            //     }
            // }
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
