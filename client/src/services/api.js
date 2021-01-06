import axios from 'axios'

export const restApi = (url, method, data={}) =>{
    return axios({
        url: `http://localhost:8080/api${url}`,
        method,
        data
        
    }).then((res) =>{
        console.log(res.data)
        return res.data
    }).catch((error) =>{
        console.log(error.response)
        return error.response
    })
}