import { React, useState } from "react";
import { API } from "../../service/api";
import './Login.css'
const Login = () => {

  const singupInitialValues={
    name:'',
    username:'',
    password:''
  }
  const [account, setAccount] = useState("Login");
  const [signup, setsignup] = useState(singupInitialValues)
  const [error,setError]=useState('')

  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  // console.log("before submit>>>>>",userName,password);
  const onSubmitForm = (e) => {
    console.log(signup);
    e.preventDefault();
    e.target.reset();
  };

  const onInputChange=(e)=>{
      setsignup({...signup,[e.target.name]:e.target.value})
  }
  


  const signupUser= async ()=>{
     const response = await API.userSignup(signup);


     console.log(">>>>res",response);

      if(response.isSuccess){
        setError("")
        setsignup(singupInitialValues);
        setAccount('Login');
      } else{
          setError('something went wrong! Please try again later');
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
              required
            />
            <br />
            <br />
            <input
              className="input-spacing"
              type="password"
              placeholder="Enter password"
              required
            
            />
            {error?<p style={{color:'red'}}>{error}</p>:""}
            <br />
            <br />
            <button className="input-spacing btn" type="submit">Login</button>
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
            {error?"":<p style={{color:'red'}}>{error}</p>}
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
