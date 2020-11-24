import React, { Component } from "react";
import {
    StyleSheet, View, TouchableOpacity, Image, Text
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Input } from 'react-native-elements';


export default class SignInScreen extends Component {
    constructor(props) {
        super(props);

    }

    static navigationOptions = ({ navigation }) => {
        return {
            gesturesEnabled: false,
            header: () => null
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 5 }} end={{ x: 1.5, y: 0 }}
                    style={{ width: "100%", height: '10%', alignItems: 'center', justifyContent: 'center', }} colors={['#2363C1', '#000']} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginTop: 40 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Start')}>
                            <Image
                                style={{ marginLeft: 15 }}
                                source={require('../../Image/back.svg')}
                            />
                        </TouchableOpacity>
                        <Text style={{ width: '87%', textAlign: 'center', fontSize: 18, color: "#fff" }}>Create An Account</Text>
                    </View>
                </LinearGradient>
                <View style={{width:'90%'}}>
                    <Input
                        placeholder='First Name'
                    />

                    <Input
                        placeholder='Last Name'
                    />

                    <Input
                        placeholder='Email Address'
                    />

                    <Input
                        placeholder='Verify Email Address'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center'
    },
});
