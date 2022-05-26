import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

//import { useSpring, animated } from 'react-spring';
function Home(props) {
  // const [state, toggle] = useState(true)
  // const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
    const [symbols, setSymbols] = useState(null)
    async function getHomeData() {
      const res = await fetch(props.URL);
      const data = await res.json();
      setSymbols(data)
    }

    getHomeData()
        
    
    
    
    const loaded = () => (
      <div>
        <br>
        </br>
        <br></br>
        <h2>Contact</h2>
        <h3>Phone: 4048309338</h3>
        <h3>Address: 2362 Young America Dr, Lawrenceville, GA</h3>
        <h3>Email: kunhyuk96lee@gmail.com</h3>
        <br></br>
        <h2>Skills: </h2>
        <img className="symbols" src={symbols.javascript} alt = "javascript"/>
        <img className="symbols" src={symbols.react} alt = "javascript"/>
        <img className="symbols" src={symbols.express} alt = "javascript"/>
        <img className="symbols" src={symbols.node} alt = "javascript"/>
        <img className="symbols" src={symbols.mongodb} alt = "javascript"/>
        <img className="symbols" src={symbols.java} alt = "javascript"/>
        <img className="symbols" src={symbols.androidstudio} alt = "javascript"/>
        <img className="symbols" src={symbols.github} alt = "javascript"/>
        <img className="symbols" src={symbols.cplusplus} alt = "javascript"/>

        <img className="symbols" src={symbols.python} alt = "javascript"/>
        <img className="symbols" src={symbols.django} alt = "javascript"/>


        
        
        
      </div>
    
    );
   
    return symbols ? loaded() : <h1>Loading...</h1>;
  }
  
  export default Home;