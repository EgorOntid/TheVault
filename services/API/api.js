import { userToken } from "./Authorization/api";

const getHeaders = async function getHeaders() {
    let token = await userToken();
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    }
}

const getHeadersFiles = async function getHeaders() {
    let token = await userToken();
    return {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
    }
}

export const getParams = async function getParams() {
    let headers = await getHeaders();
    let headersFiles = await getHeadersFiles();
    return {
        POST: {
            method: 'POST',
            headers: headers
        },
        POST_FILES: {
            method: 'POST',
            headers: headersFiles
        },
        GET: {
            method: 'GET',
            headers: headers
        },
        PATCH: {
            method: 'PATCH',
            headers: headers
        },
        PUT: {
            method: 'PUT',
            headers: headers
        },
        DELETE: {
            method: 'DELETE',
            headers: headers
        }
    }
}



module.exports.getParams = getParams;