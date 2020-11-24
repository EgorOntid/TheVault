import { getParams } from "../api";
import Config from "../../config";

const ASSEMBLIES = "/api/assemblies";
const BUILDING = '/api/mobile/owner/buildingListByOwner'

const endpoints = {
    Assemblies_owner: ASSEMBLIES,
    Building_owner: BUILDING
};

export async function assemblies(id) {
    const parameters = (await getParams()).GET;
    return fetch(`${Config.SERVER_URI}${endpoints.Assemblies_owner}?buildingID=${id}`, parameters);
}

export async function getBuilding() {
    const parameters = (await getParams()).GET;
    return fetch(`${Config.SERVER_URI}${endpoints.Building_owner}`, parameters);
}

export async function assemblies_one(id) {
    const parameters = (await getParams()).GET;
    return fetch(`${Config.SERVER_URI}${endpoints.Assemblies_owner}/${id}`, parameters);
}

export async function addNewVotes(valueID, data) {
    const id = valueID
    console.log(id)
    const parameters = (await getParams()).POST;
    parameters.body = JSON.stringify(data);
    return fetch(`${Config.SERVER_URI}${endpoints.Assemblies_owner}/${id}/vote`, parameters);
}


