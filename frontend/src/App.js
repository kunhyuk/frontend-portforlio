import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import React from "react";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  // const URL = "https://aqueous-sands-12867.herokuapp.com/";
  const URL = "https://react-portfolio-kunhyuk.herokuapp.com/"

  //background here
  return (
    <div className="App">
      <div
      style={{
        backgroundColor: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        color: "white"
      }}
    >
      <Header />
      <div>
        
      </div>
<Routes>
  <Route exact path="/" element={<Home URL={URL}/>}/>
    
  
  <Route path="/projects"  element={<Projects URL={URL}/>}/>
    
  
  <Route path="/about" element={<About URL={URL}/>}/>
    
 
</Routes>
<Footer />
    </div>
      
    </div>
  );
}

export default App;