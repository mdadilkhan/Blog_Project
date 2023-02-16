import { React, useState } from "react";
import './Login.css'
const Login = () => {

  const singupInitialValues={
    name:'',
    username:'',
    password:''
  }
  const [account, setAccount] = useState("Login");
  const [signup, setsignup] = useState(singupInitialValues)
 

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
  
  return (
    <div className="container">
    <div className="image" ><img src={imageURL} alt="title logo" /></div>
      <div className="parent-card">

      </div>
      {
        account === "Login" ? (
        <div className="card">
          <form action="" onSubmit={onSubmitForm}>
            <input
            className="spacing"
              type="text"
              placeholder="Enter username"
              required
             
            />
            <br />
            <br />
            <input
              className="spacing"
              type="password"
              placeholder="Enter password"
              required
            
            />
            <br />
            <br />
            <button className="spacing btn" type="submit">Login</button>
            <h2 className="or">or</h2>
            <button className="spacing" onClick={(e)=>{setAccount("Signup")}}>Create an account</button>
          </form>
        </div>
      ) : (
        <div className="card">
          <form action="" onSubmit={onSubmitForm}>
            <input
              className="spacing"
              type="text"
              placeholder="Enter name"
              required
              name="name"
              onChange={(e)=>{onInputChange(e)}}
            />
            <br /> <br />
            <input
              className="spacing"
              type="text"
              placeholder="Enter username"
              required
              name="username"
              onChange={(e)=>{onInputChange(e)}}
            />
            <br /> <br />
            <input
              className="spacing"
              type="password"
              placeholder="Enter password"
              required
              name="password"
              onChange={(e)=>{onInputChange(e)}}
            />
            <br /> <br />
            <button className="spacing" type="submit">Signup</button>
          </form>
          <h2 className="or">or</h2>
          <button className="spacing btn" onClick={(e)=>{setAccount("Login")}}>Already have an account</button>
        </div>
      )}
    </div>
  );
};

export default Login;
