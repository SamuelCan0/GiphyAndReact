import React from "react";
import Giphy from "./components/Giphy";
import './App.css';

const App=()=>{
    return(
        <>
        <React.StrictMode>
            <h1 className="titulo-principal">React JS con Giphy</h1>
            <Giphy/>
        </React.StrictMode>
        </>
    );
}


export default App;