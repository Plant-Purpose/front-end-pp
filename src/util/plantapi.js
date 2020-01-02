import axios from "axios";



export default function() {
    return axios.create({        
        baseUrl: 'https://trefle.io/',
        headers: {
            Authorization: 'elpiZ21wT1JXZFVzemlubmx0VlRJZz09'
        }
    })
}