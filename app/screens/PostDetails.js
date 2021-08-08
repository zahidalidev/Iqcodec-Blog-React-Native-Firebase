import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../config/Colors';
import Constants from 'expo-constants';

function PostDetails(props) {
    const [postDetails, setPostDetail] = useState({})
    const [source, setSource] = useState({
        html: ""
    });

    const getPost = () => {
        const post = props.route.params.post;

        setPostDetail({
            auther: post.authorName,
            title: post.title
        })
        console.log(post.content)
        setSource({
            html: post.content.replace(/<a/ig, '<a target=\"_blank\"')
        })
    }

    useEffect(() => {
        getPost(props.route.params)
    }, [])

    return (
        <View style={{ flex: 1 }} >
            <StatusBar backgroundColor={Colors.primary} />
            <Appbar style={{ backgroundColor: Colors.primary, marginTop: Constants.statusBarHeight }} >
                <Appbar.BackAction onPress={() => props.navigation.navigate('HomeScreen')} />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ fontFamily: "sans-serif-medium", color: Colors.white, fontSize: RFPercentage(2.5), marginRight: RFPercentage(4) }} >IQCODEC</Text>
                </View>
            </Appbar>

            <AutoHeightWebView style={{ width: "90%", marginTop: 35, marginLeft: "5%" }}
                // customScript={`document.body.style.background = 'lightyellow';`}
                customStyle={`
                    p {
                    font-size: 16px;
                    }
                    iframe {
                        width: 120%;
                        height: 200px;
                        margin-left: ${RFPercentage(-3.5)}px
                    }
                    figure {
                        width: 100px ;
                        height: 200px;
                        margin-left: ${RFPercentage(-3.5)}px;
                        margin-bottom: 200px
                    }
                `}
                allowsFullscreenVideo={true}
                // onSizeUpdated={size => console.log(size.height)}
                files={[{
                    href: 'cssfileaddress',
                    type: 'text/css',
                    rel: 'stylesheet'
                }]}
                source={source}
                scalesPageToFit={true}
                viewportContent={'width=device-width, user-scalable=no'}
            />
        </View>
    );
}

export default PostDetails;