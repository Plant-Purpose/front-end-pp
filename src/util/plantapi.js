import axios from "axios";



export default function() {
    return axios.create({        
        baseURL: 'https://trefle.io/api/auth/claim?token=YOUR-TOKEN&origin=YOUR-WEBSITE-URL',
        
    })
}