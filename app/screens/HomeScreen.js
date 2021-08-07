import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Modal,
    Dimensions,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
    Image,
    ScrollView
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { WebView } from 'react-native-webview';
import AppTextInput from "../components/common/AppTextInput"
import { LinearGradient } from 'expo-linear-gradient';

import Colors from "../config/Colors"
import logo from "../../assets/images/logo.png"

import { GetAllBlogs } from "../services/BlogServices";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

function HomeScreen() {

    let [allPosts, setAllPosts] = useState([])
    let [activityIndic, setActivityIndic] = useState()
    let [searchValue, setSearchValue] = useState()

    const getPosts = async () => {
        try {
            const data = await GetAllBlogs()
            setAllPosts(data)
        } catch (error) {
            console.log("Getting posts error")
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    const handleSearch = (text) => {
        setSearchValue(text)
    }

    return (
        <ScrollView style={{ flex: 1, width: "100%", backgroundColor: Colors.white }} >
            <View style={{ width: "100%", height: RFPercentage(26), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                <LinearGradient colors={[Colors.primaryLight, Colors.primary]} start={[0.1, 0.7]} end={[1, 0.2]}  >
                    <StatusBar style="light" barStyle="light-content"
                        translucent={true}
                        backgroundColor="transparent" />
                </LinearGradient>

                <LinearGradient colors={[Colors.primaryLight, Colors.primary]} start={[0.1, 1.2]} end={[1.2, 0.9]} style={{ width: width, flex: 1, borderBottomLeftRadius: RFPercentage(5), borderBottomRightRadius: RFPercentage(5), flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }} >
                    <Image source={logo} width={RFPercentage(10)} height={RFPercentage(10)} style={{ marginBottom: RFPercentage(-2), width: RFPercentage(16), height: RFPercentage(10) }} />

                    <View style={{ width: "90%", justifyContent: 'flex-start', alignItems: 'center', marginBottom: RFPercentage(-1), }} >
                        <AppTextInput
                            placeHolder="Search"
                            width="96%"
                            value={searchValue}
                            onChange={(text) => handleSearch(text)}
                            rightIcon="magnify"
                            rightFunction={() => handleSearch()}
                            elevation={6}
                            height={RFPercentage(5.7)}
                            backgroundColor={Colors.white}
                        />
                    </View>
                </LinearGradient>
            </View>

            <View style={styles.container}>
                {activityIndic
                    ? <View style={{ flexDirection: 'column', backgroundColor: Colors.lightGrey, width: "100%", flex: 1.8, alignItems: 'center', justifyContent: 'center' }} >
                        <ActivityIndicator color={Colors.primary} size={RFPercentage(6)} />
                    </View>
                    : <>
                        {/* Bottom Contaienr */}
                        <View style={{ flexDirection: 'column', backgroundColor: Colors.white, width: "100%", flex: 1.8, alignItems: 'center', justifyContent: 'center' }} >
                            {
                                allPosts.map((item, index) => (
                                    <View key={index} style={{ elevation: 2, flexDirection: "row", backgroundColor: Colors.white, width: "90%", height: RFPercentage(14), borderRadius: RFPercentage(1), marginBottom: RFPercentage(1), marginTop: index == 0 ? RFPercentage(2) : RFPercentage(1) }} >
                                        <View style={{ width: "40%" }} >
                                            <Image resizeMode="cover" style={{ borderRadius: 10, width: "100%", height: "100%" }} source={{ uri: item.featuredImageSrc }} />
                                        </View>
                                        <View style={{ justifyContent: "space-between", alignItems: "flex-start", width: "60%", flexDirection: "column", padding: RFPercentage(1.5) }} >
                                            <Text numberOfLines={2} style={{ fontSize: RFPercentage(2.1), fontFamily: "sans-serif-medium" }} >{item.title}</Text>
                                            <Text numberOfLines={2} style={{ fontSize: RFPercentage(1.7), fontFamily: "sans-serif", color: Colors.grey }} >{item.excerpt}</Text>
                                            <View style={{ alignItems: "flex-start", flexDirection: "row", width: "100%", justifyContent: "flex-start" }} >
                                                <Text numberOfLines={1} style={{ width: "25%", fontSize: RFPercentage(1.7), fontFamily: "sans-serif-medium" }} >{item.authorName}</Text>
                                                <View style={{ width: "60%", justifyContent: "flex-start" }} >
                                                    <Text numberOfLines={1} style={{ alignSelf: "flex-start", fontSize: RFPercentage(1.7), fontFamily: "sans-serif-medium", color: Colors.mediumGrey }} >{item.date}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </>
                }
            </View>
            <View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
})

export default HomeScreen;
