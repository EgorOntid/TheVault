import { getParams } from "../api";
import Config from "../../config";
import { Avatar } from "react-native-elements";

const PROFILE = "/api/mobile/owner/profile";
const PROFILE_UPDATE = '/api/mobile/owner/profile';
const ADD_USERS = '/api/mobile/owner/subAccount';
const ALL_USERS = '/api/mobile/owner/subAccountList';
const DELETE = '/api/mobile/owner/subAccount/';
const AVATAR = '/api/mobile/owner/profile/upload';

const endpoints = {
    profile_owner: PROFILE,
    profile_update_owner: PROFILE_UPDATE,
    add_users: ADD_USERS,
    Delete: DELETE,
    AllUsers: ALL_USERS,
    UploadAvatar: AVATAR
};

export async function profile() {
    const parameters = (await getParams()).GET;
    return fetch(`${Config.SERVER_URI}${endpoints.profile_owner}`, parameters);
}

export async function uploadAvatar(response) {
    const parameters = (await getParams()).POST_FILES;
    parameters.body = response;
    return fetch(`${Config.SERVER_URI}${endpoints.UploadAvatar}`, parameters);
}


export async function update_Profile(lastname, firstname, email, phone, address) {
    const parameters = (await getParams()).POST;
    parameters.body = JSON.stringify(lastname, firstname, email, phone, address);
    return fetch(`${Config.SERVER_URI}${endpoints.profile_update_owner}`, parameters);
}

export async function addUsers(lastname, firstname, email, phone) {
    const parameters = (await getParams()).POST;
    parameters.body = JSON.stringify({ lastname, firstname, email, phone });
    return fetch(`${Config.SERVER_URI}${endpoints.add_users}`, parameters);
}

export async function allUsers() {
    const parameters = (await getParams()).POST;
    return fetch(`${Config.SERVER_URI}${endpoints.AllUsers}`, parameters);
}

export async function deleteUser(id) {
    const parameters = (await getParams()).DELETE;
    return fetch(`${Config.SERVER_URI}${endpoints.Delete}${id}`, parameters);
}
