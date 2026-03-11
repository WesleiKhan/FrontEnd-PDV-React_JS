import {api} from "../core/api";
import {data} from "react-router-dom";

export function registerAgreement(data) {
    return api.post("/agreement/register", data);
}

export function getAgreements() {
    return api.get("/agreement/agreements");
}

export function updateAgreement(id, data) {
    return api.put(`/agreement/update/${id}`, data);
}

export function deleteAgreement(id) {
    return api.delete(`/agreement/delete/${id}`);
}

export function saveAgreementOnRedis(data) {
    return api.post(`/agreement/save/redis`, data);
}

export function readAgreementOnRedis() {
    return api.get(`/agreement/read/redis`);
}