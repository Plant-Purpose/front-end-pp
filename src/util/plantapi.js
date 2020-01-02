import axios from "axios";

export default function() {
    return axios.create({        
        baseURL: 'https://trefle.io/api/auth/claim?token=elpiZ21wT1JXZFVzemlubmx0VlRJZz09&origin=localhost:3000',        
    })
}