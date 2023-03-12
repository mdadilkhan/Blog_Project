import axios from "axios";

import { API_NOTIFICATION_MESSAGE,SERVICE_URLS} from "../constants/config";
import { getAccessToken, getType } from "../utils/common-utils";
//this is backend url
const API_URL='http://localhost:8000';


const axiosInstance=axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        "Accept": "application/json, form-data", 
 
    }
})



axiosInstance.interceptors.request.use(
    function(config){
        if(config.TYPE.params){
            config.params=config.TYPE.params;
        }else if(config.TYPE.query){
            config.url=config.url + '/' + config.TYPE.query;
        }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)



axiosInstance.interceptors.response.use(
    function(response){
        console.log("function>>>",response);
        //you can stop global loadeer here
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(error));
    }

)








////////////////////////
// if success-> returun {isSuccess:true,data:data}
//if fail-> return {is failure:true,status: string,msg:string,code:int}
//////////////////
const processResponse=(response)=>{
    if(response?.status===200){
        console.log("api page>>",response.status,response.data);
      return {
              isSuccess:true,
              data:response.data
            }
    }else{
        return {
                 isFailure:true,
                 status:response?.status,
                 msg:response?.msg,
                 code:response?.code
                }
    }
}
 

////////////////////////
// if success-> returun {isSuccess:true,data:data}
//if fail-> return {is failure:true,status: string,msg:string,code:int}
//////////////////
const processError=(error)=>{
    if(error.response){
        // request made and server responded with a status code other than 200
        //that falls out of the range of 2.x.x
        console.log('ERROR IN RESPONSE',error);
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGE.responseFailure,
            code:error.response.status
        }
    }else if(error.request){
        // request made but no response was resieved
        console.log('ERROR IN REQUEST',error);
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGE.requestFailure,
            code:""
        }
    }else{
        //something happend in setting up request that trigers an error
        console.log('ERROR IN NETWORK',error);
         return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGE.networkError,
            code:""
         }
    }
}

const API={}
//'showUploadProgress and' 'showDownloadProgress' is used when you have to progress bar on ui for fetching the data downloading the data


for(const [key,value] of Object.entries(SERVICE_URLS)){
    API[key] =(body,showUploadProgress,showDownloadProgress)=>
       axiosInstance({
          method:value.method,
          url:value.url,
          data:body,
          responseType:value.responseType,
          headers:{
            authorization:getAccessToken()
          },
          TYPE:getType(value, body),
          onUploadProgress:function(progressEvent){
            if(showUploadProgress){
                let percentageCompleted=Math.round((progressEvent.loaded*100)/progressEvent.total);
                showUploadProgress(percentageCompleted);
            }
          },
          onDownloadProgress:function(progressEvent){
            if(showUploadProgress){
                let percentageCompleted=Math.round((progressEvent.loaded*100)/progressEvent.total);
                showDownloadProgress(percentageCompleted);
            }
          }
       }) 
}



export {API}