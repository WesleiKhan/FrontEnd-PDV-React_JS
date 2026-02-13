import {api} from "../core/api";

export function startBox(boxDate) {
    return api.post("/box/start", boxDate);
}

export function getBoxOpened() {
    return api.get("/box/opened");
}

export function finishBox(id) {
    return api.post(`/box/finish/${id}`);
}