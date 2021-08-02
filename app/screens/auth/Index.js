import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView, Dimensions, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from "expo-constants"

// components
import Login from './Login';
import SignUp from './SignUp';

// config
import Colors from "../../config/Colors"

import logo from "../../../assets/images/logo.png"

const { width } = Dimensions.get("window");

function Index(props) {

    const [initialComponent, setinitialComponent] = useState(0);
    const [active, setActive] = useState(0);
    const [xTabOne, setXTabOne] = useState(0);
    const [xTabTwo, setXTabTwo] = useState(0);
    const [translateX, setTranslateX] = useState(new Animated.Value(0));
    const [translateXTabOne, setTranslateXTabOne] = useState(new Animated.Value(0));
    const [translateXTabTwo, setTranslateXTabTwo] = useState(new Animated.Value(width));
    const [translateY, setTranslateY] = useState(-1000);

    const handleSlide = type => {
        setinitialComponent(initialComponent + 1)
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        }
    };

    return (
        <View style={styles.container}>

            <LinearGradient colors={[Colors.primary, Colors.primaryLight]} start={[0.1, 0.7]} end={[1, 0.2]}  >
                <StatusBar style="light" barStyle="light-content"
                    translucent={true}
                    backgroundColor="transparent" />
            </LinearGradient>

            <LinearGradient colors={[Colors.primary, Colors.primaryLight]} start={[0.1, 0.7]} end={[1, 0.2]} style={{ width: "100%", flex: 0.6, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                <Image source={logo} width={RFPercentage(10)} height={RFPercentage(10)} />
            </LinearGradient>

            {/* Bottom Contaienr */}
            <View style={{ marginTop: -RFPercentage(4), borderTopRightRadius: RFPercentage(4), borderTopLeftRadius: RFPercentage(4), backgroundColor: Colors.lightGrey, width: "100%", flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                <View style={{ width: "100%", justifyContent: 'flex-start', flex: 1, justifyContent: 'center', alignItems: "center" }}>

                    {/* Tabs */}
                    <View style={{ width: "70%", flexDirection: "row", height: RFPercentage(5), marginTop: RFPercentage(3) }}>
                        <Animated.View style={{ position: "absolute", width: "50%", height: "100%", top: 0, left: 0, backgroundColor: Colors.primary, borderRadius: 4, transform: [{ translateX }] }} />
                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 4, borderRightWidth: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                            onLayout={event => setXTabOne(event.nativeEvent.layout.x)} onPress={() => { setActive(0); handleSlide(xTabOne) }}
                        >
                            <Text style={{ fontSize: RFPercentage(2.2), color: active === 0 ? Colors.white : Colors.primary }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", borderRadius: 4, borderLeftWidth: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                            onLayout={event => { setXTabTwo(event.nativeEvent.layout.x) }} onPress={() => { setActive(1); handleSlide(xTabTwo) }}
                        >
                            <Text style={{ fontSize: RFPercentage(2.2), color: active === 1 ? Colors.white : Colors.primary }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login and Sign Up Container */}
                    <ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: RFPercentage(4) }} >
                        <Animated.View style={{ justifyContent: "center", alignItems: "center", transform: [{ translateX: translateXTabOne }] }} onLayout={event => setTranslateY(event.nativeEvent.layout.height)}>
                            {initialComponent === 0 ? <Login {...props} /> : <SignUp {...props} />}
                        </Animated.View>

                        <Animated.View style={{ justifyContent: "center", alignItems: "center", transform: [{ translateX: translateXTabTwo }, { translateY: -translateY }] }}>
                            <Login {...props} />
                        </Animated.View>
                    </ScrollView>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: Colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    }
})

export default Index;