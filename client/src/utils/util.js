import axios from 'axios';

export default function * (url,method,data) {
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const res=yield axios[method](url,data,config);
    return res;
    
}