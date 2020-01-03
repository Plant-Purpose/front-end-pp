import axios from "axios";

export function getToken() {
    return localStorage.getItem('token');
}

export default function() {
    return axios.create({
        baseUrl: "https://plant-purpose.herokuapp.com/",
        headers: {
            Authorization: getToken(),
        }
    })
}