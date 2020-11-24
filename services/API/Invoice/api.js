import { getParams } from "../api";
import Config from "../../config";

const INVOCE_ADDON = '/api/web/owner/invoice_addon';
const ADDON = '/api/web/owner/addon'
const CARDS = '/api/web/owner/cardList'
const CARDS_EDIT = '/api/web/owner/card'
const DELETE_CARD = '/api/web/owner/card'

const endpoints = {
    Invoce_addon: INVOCE_ADDON,
    Addon: ADDON,
    Cards: CARDS,
    Cards_edit: CARDS_EDIT,
    Delete: DELETE_CARD
};

export async function invoce() {
    const parameters = (await getParams()).GET;
    return fetch(`${Config.SERVER_URI}${endpoints.Invoce_addon}`, parameters);
}

export async function get_addon() {
    const parameters = (await getParams()).GET;
    return fetch(`${Config.SERVER_URI}${endpoints.Addon}`, parameters);
}

export async function get_cards() {
    const parameters = (await getParams()).POST;
    return fetch(`${Config.SERVER_URI}${endpoints.Cards}`, parameters);
}

export async function cardCreate(card_number, expiry_date, name, secure_code) {
    const parameters = (await getParams()).POST;
    parameters.body = JSON.stringify({ card_number, expiry_date, name, secure_code });
    return fetch(`${Config.SERVER_URI}${endpoints.Cards_edit}`, parameters);
}

export async function card_edit(card_number, expiry_date, name, secure_code, id) {
    const parameters = (await getParams()).PUT;
    parameters.body = JSON.stringify({ card_number, expiry_date, name, secure_code });
    return fetch(`${Config.SERVER_URI}${endpoints.Cards_edit}/${id}`, parameters);
}

export async function deleteCard(id) {
    const parameters = (await getParams()).DELETE;
    return fetch(`${Config.SERVER_URI}${endpoints.Delete}/${id}`, parameters);
}