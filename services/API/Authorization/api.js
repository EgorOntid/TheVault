import { getParams } from "../api";
import Config from "../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN_API = "/api/auth/login";
const REFRWSH_TOKEN = "/api/auth/refresh-tokens";
const FORGOT = '/api/auth/forgotPassword';
const LOGOUT = '/api/auth/logout'
const endpoints = {
    loginUser: LOGIN_API,
    refresh_token: REFRWSH_TOKEN,
    ForgotPassword: FORGOT,
    LogOut: LOGOUT
};

export const kUserToken = "keyToken";
export const RUserToken = "RUserToken";

export const Email = "EMAIL";
export const Password = "PASSWORD";

export async function loginUser(email, password) {
    await AsyncStorage.setItem(Email, email);
    await AsyncStorage.setItem(Password, password);
    const parameters = (await getParams()).POST;
    parameters.body = JSON.stringify({ email, password });
    return fetch(`${Config.SERVER_URI}${endpoints.loginUser}`, parameters);

}

export async function forgotPassword(email) {
    const parameters = (await getParams()).POST;
    parameters.body = JSON.stringify(email);
    return fetch(`${Config.SERVER_URI}${endpoints.ForgotPassword}`, parameters);
}

export async function getUserToken(token) {
    await AsyncStorage.setItem(kUserToken, token.token);
}

export async function logOut() {
    const parameters = (await getParams()).POST;
    parameters.body = JSON.stringify();
    return fetch(`${Config.SERVER_URI}${endpoints.LogOut}`, parameters);
}

export async function userToken() {
    return AsyncStorage.getItem(kUserToken);
}

export async function refresh_token(navigation) {
    console.log(navigation)
    const email = await AsyncStorage.getItem(Email)
    const password = await AsyncStorage.getItem(Password)
    const parameters = (await getParams()).POST;
    parameters.body = JSON.stringify({ email, password });
    return fetch(`${Config.SERVER_URI}${endpoints.loginUser}`, parameters)
        .then(response => response.json()
        ).then(data => {
            if (data.code == 200) {
                console.log(data.data)
                getUserToken(data.data)
                if (navigation) {
                    AsyncStorage.setItem('last', data.data.profile.lastname);
                    AsyncStorage.setItem('first', data.data.profile.firstname);
                    AsyncStorage.setItem('avatar', data.data.profile.photo_url);
                    navigation.navigate('Home')
                } else {
                    AsyncStorage.setItem('last', data.data.profile.lastname);
                    AsyncStorage.setItem('first', data.data.profile.firstname);
                    AsyncStorage.setItem('avatar', data.data.profile.photo_url);
                    console.log('good')
                }
            } else {
                console.log(data.message)
            }
        })
}


