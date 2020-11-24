import React from 'react';
import {
    View, AppRegistry, Text, Image
} from 'react-native';
import MainServices from '../../services/MainService'
import LaunchScreen from '../LaunchScreen/LaunchScreen';
import { Button } from 'react-native-elements'
import Swiper from 'react-native-swiper'

export default class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
        MainServices.load(v => this.setState({ loaded: true }));
    }
    static navigationOptions = {
        gesturesEnabled: false,
        header: () => null
    };

    render() {
        const { loaded } = this.state
        return (
            !loaded ? <LaunchScreen navigation={this.props.navigation} /> :
                <View style={{ alignItems: 'center', justifyContent: "center", width: "100%", height: "100%", backgroundColor: '#fff' }}>
                    <Swiper showsButtons={false}
                        dotColor='#000'
                    >
                        <View style={{ width: '100%', height: '90%', justifyContent: 'center', }}>
                            <Image
                                style={{ height: '100%', width: '100%', }}
                                source={require('../../Image/Backgraund.svg')} />
                            <View style={{ position: 'absolute', width: '80%', justifyContent: 'space-evenly', height: '60%', marginLeft: 60 }}>
                                <Text style={{ width: '100%', fontSize: 46, color: '#fff', fontWeight: 'bold' }}>
                                    Equitable, Transparent & Secure
                                    </Text>
                                <Text style={{ width: '90%', fontSize: 26, color: '#fff', fontWeight: '300' }}>
                                    Access to the financial system, with full transparency. Don’t worry about hidden fees.
                                    </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ marginTop: 20 }}
                                source={require('../../Image/schedule.svg')} />
                            <Text
                                style={{ color: '#2363C1', width: '45%', textAlign: "center", marginTop: 30, fontSize: 16 }}
                            >Be aware of your cash flow all the time</Text>
                            <Image
                                style={{ marginTop: 10 }}
                                source={require('../../Image/1.svg')} />
                        </View>
                        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ marginTop: 20 }}
                                source={require('../../Image/arrows.svg')} />
                            <Text
                                style={{ color: '#2363C1', width: '45%', textAlign: "center", marginTop: 30, fontSize: 16 }}
                            >Transfer your money instantly hassle free</Text>
                            <Image
                                style={{ marginTop: 10 }}
                                source={require('../../Image/2.svg')} />
                        </View>
                    </Swiper>
                    <View style={{ height: 200 }}>
                        <Button
                            onPress={() => this.props.navigation.navigate('SignIn')}
                            buttonStyle={{ borderRadius: 25, backgroundColor: "#2363C1", width: 300, height: 54 }}
                            title="Get Started"
                        />
                        <Button
                            onPress={() => this.props.navigation.navigate('LogIn')}
                            buttonStyle={{ borderRadius: 25, backgroundColor: "#ffffff", width: 300, height: 54, marginTop: 15, borderColor: '#2363C1' }}
                            titleStyle={{ color: '#2363C1' }}
                            title="Sign In"
                            type="outline"
                        />
                    </View>
                </View>
        )
    }
}

AppRegistry.registerComponent('myproject', () => StartScreen)
