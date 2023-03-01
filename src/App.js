import React,{useState}from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./Components/account/Login";
import Home from "./Components/home/Home"
import Header from "./Components/header/Header"
import "./App.css";
import DataProvider from "./context/DataProvider";
import CreatePost from "./create/CreatePost";



const PrivateRoute=({isAuthenticated,...props})=>{
  return isAuthenticated ?
  <>
   <Header/>
  <Outlet/>
  </>
  :<Navigate replace to='/login' />

}


function App() {
  
const [isAuthenticated,isUserAuthenticated]=useState(false);

console.log("auth>>",isAuthenticated);
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>} />
             <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
               <Route path='/' element={<Home />}/>
             </Route>
             <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
               <Route path='/create' element={<CreatePost />}/>
             </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}
export default App;
