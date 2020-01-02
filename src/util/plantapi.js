import axios from "axios";

export default function() {
    return axios.create({        
       headers: {
           Authorization: 'elpiZ21wT1JXZFVzemlubmx0VlRJZz09'                
       }        
    })
}