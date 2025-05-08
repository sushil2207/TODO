import React, { useEffect, useState } from "react";
import NavBar from "./layouts/NavBar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Active from "./pages/Active";
import "./App.css";
import axios from "axios";

const App = () => {
  //const items = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  
 return(
 <>
    <div className="header">
      <p>#TODO</p>
    </div>
    <Router>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/active" element={<Active/>}></Route>
      <Route path="/completed" element={<Completed/>}></Route>
    </Routes>
    </Router>
 </>
 )
};

export default App;
