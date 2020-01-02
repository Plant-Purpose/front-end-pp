import axios from "axios";

export function getToken() {
    return localStorage.getItem('token');
}

export default function() {
    return axios.create({
        headers: {
            Authorization: getToken();
        }
    })
}