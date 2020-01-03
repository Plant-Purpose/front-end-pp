import axios from "axios";

export default function() {
    return axios.create({        
       headers: {
           Authorization: 'elpiZ21wT1JXZFVzemlubmx0VlRJZz09',
           "Access-Control-Allow-Origin":  "https://front-end-pp.now.sh'"             
       }        
    })
}