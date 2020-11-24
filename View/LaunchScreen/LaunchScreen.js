import React, { Component } from "react";
import {
    Image, StyleSheet, View, AppRegistry,
    Animated,
    Easing
} from "react-native";

export default class LaunchScreen extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
            easing: Easing.linear
        }
        ).start();
    }

    static navigationOptions = {
        header: () => null
    };

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={styles.container}>
                <Image
                    style={{ height: '105%', width: '105%' }}
                    source={require('../../Image/BG.svg')} />
                <Animated.Image
                    style={[
                        styles.coinStyle,
                        {
                            transform: [
                                { rotate: spin }
                            ]
                        }
                    ]}
                    source={require('../../Image/Loader.svg')}
                />
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

AppRegistry.registerComponent('animateTest', () => LaunchScreen);
