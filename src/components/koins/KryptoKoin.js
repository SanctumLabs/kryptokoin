/**
 * @author lusinabrian
 * @date 25/10/17
 * @notes Single KryptoKoin currency
 */

import React from "react";
import {View, Text, Image} from "react-native";
import {kyptoKoinImages} from "./kryptoKoinAssets";
import {koinStyles} from "./koinStyles";

// Deconstruct the styles object
const {
    container, image, moneySymbol, upperRow, coinSymbol,
    coinName, coinPrice, statisticsContainer, seperator,
    percentChangePlus, percentChangeMinus
} = koinStyles;

const KryptoKoin = ({symbol, coin_name, price_usd, percent_change_7d, percent_change_24h}) => {
    return (
        <View style={container}>

            <View style={upperRow}>
                <Image
                    style={image}
                    source={{ uri: kyptoKoinImages[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>{price_usd}
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>

            <View style={statisticsContainer}>

                <Text>24h:
                    <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

            </View>
        </View>
    )
};

export default KryptoKoin;