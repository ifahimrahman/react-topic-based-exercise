import React from "react";
import { createRoot } from 'react-dom/client';

const names =['Fahim', 'Rahman','Protik'];

const NewNameList = names.map(name=>{
    return(<h1>{name}</h1>);
}
);

const PrintNames=()=>{
    return(
        <section>
            <h1>{NewNameList}</h1>
        </section>
    )
}


const Container = document.querySelector('#root')

const root = createRoot(Container)
root.render(<PrintNames/>)
