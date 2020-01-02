import axios from "axios";

export default function() {
    return axios.create({        
       headers: {
           Token: 'elpiZ21wT1JXZFVzemlubmx0VlRJZz09',
           origin: 'https://front-end-pp.now.sh/'
       }        
    })
}