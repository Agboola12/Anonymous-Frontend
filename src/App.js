import React from "react";
import './App.css';
import { Route, Routes } from "react-router";
import Land from "./User/Land";
import Register from "./User/Register";
import Login from "./User/Login";
import Message from "./User/Message";


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Land/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/message" element={<Message/>}/>
          </Routes>
  </>
);
}

export default App;
