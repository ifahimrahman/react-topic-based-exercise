import React from "react";
import { createRoot } from 'react-dom/client';

const books =[{
    id:1,
    img: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL254_SR254,254_.jpg",
    title: "Iron Flame (The Empyrean, 2)",
    author:"Rebecca yarros"
},
{
    id:2,
    img: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL254_SR254,254_.jpg",
    title: "Iron Flame (The Empyrean, 2)",
    author:"Rebecca yarros"
},
{
    id:3,
    img: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL254_SR254,254_.jpg",
    title: "Iron Flame (The Empyrean, 2)",
    author:"Rebecca yarros"
}]


const BookList =()=>{
    return(
        <section>
            {books.map((book)=>{
                return(
                    <Book key={book.id} {...book}/>
                )
            })}
        </section>
    )
    
}

const Book =({img,title,author})=>{
    return(
    <article>
        <img src={img} alt=""></img>
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
    )
   
}



const Container = document.querySelector('#root')

const root = createRoot(Container)
root.render(<BookList/>)
