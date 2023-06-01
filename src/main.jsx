import React  from "react";
import  ReactDOM  from "react-dom/client";
import { GifExpertApp } from "./GifExpert";
import { AddCategory } from "./components/addCategory";
import './style.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
   <React.StrictMode>
     
        <GifExpertApp />
      
   </React.StrictMode>
)
