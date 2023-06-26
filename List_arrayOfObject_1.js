import React from "react";
import { createRoot } from 'react-dom/client';

const books =[{
    img: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL254_SR254,254_.jpg",
    title: "Iron Flame (The Empyrean, 2)",
    author:"Rebecca yarros"
},
{
    img: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL254_SR254,254_.jpg",
    title: "Iron Flame (The Empyrean, 2)",
    author:"Rebecca yarros"
},
{
    img: "https://images-na.ssl-images-amazon.com/images/I/A1bc9KkHtsL._AC_UL254_SR254,254_.jpg",
    title: "Iron Flame (The Empyrean, 2)",
    author:"Rebecca yarros"
}]


const BookList =()=>{
    return(
        <section>
            {books.map((book)=>{
                const {img,title,author}=book;
                return(
                    <Book img={img}
                    title={title}
                    author={author}
                    
                    />
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
