import {api} from "../core/api";

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