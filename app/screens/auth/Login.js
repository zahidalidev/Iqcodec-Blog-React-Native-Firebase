import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFPercentage } from 'react-native-responsive-fontsize';

// components
import AppTextInput from "../../components/common/AppTextInput"
import AppTextButton from "../../components/common/AppTextButton"

// config
import Colors from '../../config/Colors';

function Login(props) {
    const [indicator, showIndicator] = useState(false);

    const [feilds, setFeilds] = useState([
        {
            id: 0,
            placeHolder: "Enter your e-mail",
            value: '',
            secure: false,
            icon: "email-outline"
        },
        {
            id: 1,
            placeHolder: "Create your password",
            value: '',
            secure: true,
            icon: "lock-outline"
        },
    ]);

    const handleChange = (text, id) => {
        const tempFeilds = [...feilds];
        tempFeilds[id].value = text;
        setFeilds(tempFeilds);
    }

    const handleSubmit = async () => { }

    // get user from AsyncStorage to confirm login or logout
    let validateCurrentUser = async () => { }

    return (
        <View style={styles.container}>

            {/* Text feilds */}
            {feilds.map((item, i) =>
                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(1) : RFPercentage(3), width: "100%" }} >
                    <Text style={{ marginBottom: RFPercentage(2) }} >E-Mail Address</Text>
                    <AppTextInput
                        placeHolder={item.placeHolder}
                        width="100%"
                        value={item.value}
                        onChange={(text) => handleChange(text, item.id)}
                        secure={item.secure}
                        icon={item.icon}
                    />
                </View>
            )}

            {/* Login button */}
            <View style={{ width: "100%", marginTop: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }} >
                <AppTextButton
                    name="Login"
                    borderRadius={RFPercentage(10)}
                    onSubmit={() => handleSubmit()}
                    backgroundColor={Colors.primary}
                    width="80%"
                    height={RFPercentage(6.5)}
                />
            </View>

            <View style={{ flexDirection: "row", width: "100%", marginTop: RFPercentage(4), justifyContent: 'space-evenly', alignItems: 'center' }} >
                <View style={{ height: 1.5, backgroundColor: Colors.lightGrey, width: "35%" }} ></View>
                <View>
                    <Text style={{ color: Colors.mediumGrey, fontSize: RFPercentage(2.4) }} >OR USING</Text>
                </View>
                <View style={{ height: 1.5, backgroundColor: Colors.lightGrey, width: "35%" }} ></View>
            </View>

            <View style={{ width: "100%", marginTop: RFPercentage(4), marginBottom: RFPercentage(5), justifyContent: 'space-evenly', alignItems: 'center', flexDirection: "row" }} >
                <AppTextButton
                    name="Google"
                    borderRadius={RFPercentage(10)}
                    onSubmit={() => handleSubmit()}
                    backgroundColor={Colors.white}
                    width="40%"
                    textStyle={{ color: Colors.black }}
                    height={RFPercentage(6.5)}
                    google={true}
                />
                <AppTextButton
                    name="Login"
                    borderRadius={RFPercentage(10)}
                    onSubmit={() => handleSubmit()}
                    backgroundColor={"#4465AC"}
                    width="40%"
                    height={RFPercentage(6.5)}
                    facebook={true}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Login;