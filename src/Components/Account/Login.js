import { React, useState,useContext } from "react";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
//useNavigate is acustom hook of react-router-dom
import { useNavigate } from "react-router-dom";
import './Login.css'
const Login = ({isUserAuthenticated}) => {

  const singupInitialValues={
    name:'',
    username:'',
    password:''
  }

  const signinInitialValues={ 
    username:'',
    password:''
  }

  const [account, setAccount] = useState("Login");
  const [signup, setsignup] = useState(singupInitialValues);
  const [error,setError]=useState('');
  const [login,setLogin]=useState(signinInitialValues)
//geting the value of context api
  const {setAccountContext}=useContext(DataContext)
//need to initialze custom hood useNavigate
const navigate=useNavigate();


  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";


  const onSubmitForm = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const onInputChange=(e)=>{
      setsignup({...signup,[e.target.name]:e.target.value})
  }
  
  const onValueChange=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
  }






  const signupUser= async ()=>{
     const response = await API.userSignup(signup);




      if(response.isSuccess){
        setError("")
        setsignup(singupInitialValues);
        setAccount('Login');
      } else{
          setError('something went wrong! Please try again later');
      } 
  }


  const loginUser= async()=>{
    const response = await API.userLogin(login)

    if(response.isSuccess){
      setError('');
      //two things comming from backend 1 access token  which is store into sessation storage
      // 2nd is refreshToken that is going to store in sessation storage
      sessionStorage.setItem('accessToken',`Bearer${response.data.accessToken}`);
      sessionStorage.setItem('refreshToken',`Bearer${response.data.refreshToken}`);
      //name and user is used in whole project like who is written the blog and who is commented in blog
      //need to store in globally so that it is accessible every where 
      //one wat to store in local or session storage but its not good to sotore in this storage
      //so we are going to use context api(react method)
      setAccountContext({username:response.data.username,name:response.data.name})
      isUserAuthenticated(true);
      navigate('/'); 
      
    }else{
      setError('Something went wrong! Please try again later ');
    }
  }

  
  return (
    <div className="container">
      <div className="card-container">
        <div className="image-container"> <img  className="image" src={imageURL} alt="title logo" /></div>
     
       {
        account === "Login" ? (
        <div className="card">
          <form action="" onSubmit={onSubmitForm}>
            <input
            className="input-spacing"
              type="text"
              placeholder="Enter username"
              name='username'
              value={login.value}
              required
              onChange={(e)=>{onValueChange(e)}}
            />
            <br />
            <br />
            <input
              className="input-spacing"
              type="password"
              placeholder="Enter password"
              name='password'
              required
              value={login.value}
              onChange={(e)=>{onValueChange(e)}}
            />
            {error && <p style={{color:'red'}}>{error}</p>}
            <br />
            <br />
            <button className="input-spacing btn" type="submit" onClick={()=>{loginUser()}}>Login</button>
            <h2 className="or">or</h2>
            <button className="input-spacing" onClick={(e)=>{setAccount("Signup")}}>Create an account</button>
          </form>
        </div>
       ) : (
        <div className="card">
          <form action="" onSubmit={onSubmitForm}>
            <input
              className="input-spacing"
              type="text"
              placeholder="Enter name"
              required
              name="name"
              onChange={(e)=>{onInputChange(e)}}
            />
            <br /> <br />
            <input
              className="input-spacing"
              type="text"
              placeholder="Enter username"
              required
              name="username"
              onChange={(e)=>{onInputChange(e)}}
            />
            <br /> <br />
            <input
              className="input-spacing"
              type="password"
              placeholder="Enter password"
              required
              name="password"
              onChange={(e)=>{onInputChange(e)}}
            />
            {error && <p style={{color:'red'}}>{error}</p>}
            <br /> <br />
            
            <button className="input-spacing" type="submit" onClick={()=>{signupUser()}}>Signup</button>
          </form>
          <h2 className="or">or</h2>
          <button className="input-spacing btn" onClick={(e)=>{setAccount("Login")}}>Already have an account</button>
        </div>
       )}
     </div>
    </div>
  );
};

export default Login;
