// import {React,useState} from "react";
// import { Link } from "react-router-dom";


// const Signup=()=>{
//     const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
//     const [name, setName] = useState("");
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");
//     const onSubmitForm=(e)=>{
//         console.log(name,userName,password);
//         e.preventDefault();
//         // setName("");
//         // setUserName("");
//         // setPassword("");
//         e.target.reset();
//     }


//     return(
//         <div>
//         <img src={imageURL} alt="title logo" />
//          <form action="" onSubmit={onSubmitForm}>
//             <input type="text" placeholder="name" required onChange={(e)=>{setName(e.target.value)}}/> 
//             <br /> <br />
//             <input type="text" placeholder="user name" required onChange={(e)=>{setUserName(e.target.value)}}/>
//              <br /> <br />
//             <input type="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}/> 
//              <br /> <br />
//              <button type="submit">Signup</button>
//          </form>
//          <div>or</div>
//          <Link to='/'>Already have an account</Link>
//         </div>
//     )
// }


// export default Signup;