import React, { Component } from "react";
import {
    StyleSheet, View,
} from "react-native";

export default class LogInScreen extends Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = {
        gesturesEnabled: false,
        header: () => null
    };

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    coinStyle: {
        width: 150,
        height: 150,
        position: 'absolute',
    },
});
