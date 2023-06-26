import React from "react";
import { createRoot } from 'react-dom/client';

const clickHanlder=()=>{
    alert("You Triggered onclick Event In React!")
}

const Events =()=>{
    return(
         <div>
            <h1>Welcome To Events In React</h1>
            <button type="button" onClick={clickHanlder}>Click To Trigger Events In React</button>
        </div>
)
   
}



const Container = document.querySelector('#root')

const root = createRoot(Container)
root.render(<Events/>)
