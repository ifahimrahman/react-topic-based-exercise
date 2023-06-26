import React from "react";
import { createRoot } from 'react-dom/client';

const firstBook ={
    img: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL254_SR254,254_.jpg",
    title: "Iron Flame (The Empyrean, 2)",
    author:"Rebecca yarros"
}


const BookList =()=>{
    return(
        <Book img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        >
         <p>Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.</p>

        </Book>
        
        
    )
    
}

const Book =({img,title,author,children})=>{
    return(
    <article>
        <img src={img} alt=""></img>
        <h1>{title}</h1>
        <h4>{author}</h4>
        {children}
    </article>
    )
   
}



const Container = document.querySelector('#root')

const root = createRoot(Container)
root.render(<BookList/>)
