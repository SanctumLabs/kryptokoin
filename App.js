import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from "./src/index";
import configureStore from "./src/store/configureStore";
import {Provider} from "react-redux";

const store = configureStore();


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Header/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
