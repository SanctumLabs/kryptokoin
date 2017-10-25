/**
 * @author lusinabrian
 * @date 25/10/17
 * @notes Single KryptoKoin currency
 */

import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {kyptoKoinImages} from "./kryptoKoinAssets";

const KryptoKoin = ({symbol, coin_name, price_usd, percent_change_7h, percent_change_24h}) => {
    return (
        <View style={headerContainer}>
            <Image
                style={image}
                source={{
                    uri: kyptoKoinImages[symbol]
                }}/>
            <Text>{symbol}</Text>
            <Text>{coin_name}</Text>
            <Text>{price_usd}
                <Text style={bold}>$</Text>
            </Text>
            <Text style={header}>Change past 24 hours: {percent_change_24h}</Text>
            <Text style={header}>Change past 7h: {percent_change_7h}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginTop: 55,
        alignItems: "center"
    },
    image: {
        width: 40,
        height: 40,
    },
    bold: {
        fontWeight: "bold"
    },
    text: {
        fontWeight: "bold",
        fontSize: 20
    }
});

// Deconstruct the styles object
const {container, text, image, bold} = styles;

export default KryptoKoin;