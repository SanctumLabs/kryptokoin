import React from "react";
import { View, Text } from "react-native";
import {headerStyles} from "./headerStyles";

// Deconstruct the styles object
const { headerContainer, header} = headerStyles;

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                KryptoKoin
            </Text>
        </View>
    )
};

export default Header;