import axios from "axios";

//this is backend url
const API_URL='http://localhost:8000';


const axiosInstance=axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }
})

// axiosInstance.interceptors.request.use(
//     function(config){
//         return config;
//     },
//     function(error){
//         return Promise.reject(error);
//     }
// )

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        //you can stop global loadeer here
        return proceesResponse(response);
    },
    function(error){
        return Promise.reject(processError(error));
    }

)