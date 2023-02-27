import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/account/Login";
import Home from "./Components/home/Home";
import "./App.css";
import DataProvider from "./context/DataProvider";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}
export default App;
