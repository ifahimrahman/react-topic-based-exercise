import React from "react";
import { createRoot } from 'react-dom/client';


const BookList =()=>{
    return(
        <Book/>
    ) 
}

const Book =()=>{
    return(
        <article>
        <Image></Image>
        <Title/>
        <Author/>
    </article>
    )
}

const Image = ()=>( <img src="https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL254_SR254,254_.jpg" alt=""></img>)

const Title = () => <h1>Iron Flame (The Empyrean, 2)</h1>

const Author = () => <h4>Rebecca yarros</h4>

const Container = document.querySelector('#root')

const root = createRoot(Container)

root.render(<BookList/>)
