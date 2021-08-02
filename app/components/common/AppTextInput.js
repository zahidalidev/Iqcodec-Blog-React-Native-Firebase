import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from "../../config/Colors"

function AppTextInput({ autoFocus = false, elevation = 0, borderColor = Colors.primary, borderWidth = 0, placeHolder, value, onChange, width = "100%", height = RFPercentage(7), icon, secure = false, iconType = "MaterialCommunityIcons", editable = true, startEdit, endEdit }) {
    const [eyeIcon, setEyeIcon] = useState(false)

    return (
        <View style={{
            backgroundColor: Colors.lightGrey, borderRadius: RFPercentage(10),
            width: width, alignItems: 'flex-start', justifyContent: 'center',
            borderWidth: borderWidth, borderColor: borderColor, height, elevation
        }}>
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }} >
                {iconType === "Feather" ?
                    <Feather color={Colors.mediumGrey} style={{ padding: RFPercentage(1), paddingRight: 0, marginLeft: RFPercentage(1.5) }} size={RFPercentage(2.2)} name={icon} />
                    :
                    <MaterialCommunityIcons color={Colors.mediumGrey} style={{ padding: RFPercentage(1), paddingRight: 0, marginLeft: RFPercentage(1.5) }} size={RFPercentage(3)} name={icon} />
                }

                <TextInput style={{ color: Colors.black, padding: RFPercentage(1), width: icon ? "95%" : "100%", fontSize: RFPercentage(2.2) }}
                    placeholder={placeHolder}
                    placeholderTextColor={Colors.mediumGrey}
                    value={value}
                    secureTextEntry={secure && !eyeIcon}
                    editable={editable}
                    onChangeText={(text) => onChange(text)}
                    onResponderStart={startEdit}
                    onSubmitEditing={endEdit}
                    autoFocus={autoFocus}
                />
            </View>
        </View>
    );
}

export default AppTextInput;