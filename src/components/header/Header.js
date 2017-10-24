import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                KryptoKoin
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer : {
        display: "flex",
        marginTop:55,
        alignItems:"center"
    },
    header:{
        fontWeight:"bold",
        fontSize:20
    }
});

// Deconstruct the styles object
const { headerContainer, header} = styles;

export default Header;