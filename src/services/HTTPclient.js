import axios from 'axios'

// axios.defaults.headers.post["Content-Type"] = 'application/json'
axios.defaults.headers.get["Content-Type"] = 'application/json'

var instance = null;

export const setInstance = () => {
    instance = axios.create({
        baseURL: '',
        timeout: 30000,

        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response.status === 401) {
            // localStorage.removeItem('jwt');
            // localStorage.removeItem('user');
            // window.location = '/'
            console.log(error.response.data.message)
            let obj={data:error.response.data.message}
            return obj
        }
        else {
            return Promise.reject(error);
        }
    });
}

export const post=(route,data)=>{
    instance || setInstance()
    return instance.post(route,data == null ? { data: {} } :  data= JSON.stringify(data))
}

// export const postCraft=(route,imgdata,responseType='blob')=>{
//     instance || setInstance()
//     return instance.post(route,imgdata,responseType)
//     // dtodata == null ? { dtodata: {} } : dtodata= JSON.stringify(dtodata),
// }

export const get = (route, data) => {
    instance || setInstance()
    return instance.get(route, data == null ? { data: {} } : { data: JSON.stringify(data) })
}