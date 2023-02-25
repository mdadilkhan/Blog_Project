export const API_NOTIFICATION_MESSAGE={
    loading:{
        title:'Loading...',
        message:'Data is being loaded, Please wait'
    },
    success:{
      title:'success',
      message:'Data successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching response from the server. Please try again'
    },
    requestFailure:{
        title:"Error",
        message:'an error occured while parsing the request data'
    },
    networkError:{
        title:'Error',
        message:'Unable to connect with the server, Please check internet conncetivity and try again later'
    }
}



//API service call
//sample request
//need service call:{ url:'/',method:'POST/GET/PUT/DELETE', params:true/false,query:true/false}


export const SERVICE_URLS={
    userSignup:{url:'/signup',method:'POST'}
}