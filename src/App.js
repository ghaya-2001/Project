import Header from "./Components/Header/Header";
import './App.css';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

function App() {
  
  return (
    <div className='App'>
        <div className="blur s-blur2" style={{background:'#b094ff',top:"4rem",left:"10px",width:"90rem"}}></div>  
    <Router>
        <Routes>
          
          <Route path="/Posts" element={<Posts/>}/>
          <Route path="/" element={<Header/>}/>
          <Route path="/Comments" element={<Comments/>}/>
        </Routes>

    </Router>
        <div className="blur s-blur2" style={{background:'#b094ff',top:"20%",left:"10px",width:"90rem"}}></div>
       
   
    </div>
  );
}

export default App;
