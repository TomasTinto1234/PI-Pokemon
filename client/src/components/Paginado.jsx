import React from "react";

export default function Paginado ({pokemonPerPage, totalpokemon, paginado}){
    const pageNumber = []
    for(let i =0; i <= Math.ceil(totalpokemon/pokemonPerPage)-1; i++){
       pageNumber.push(i+1)
    }
    return (
      <nav>
                {pageNumber && pageNumber.map(number =>(
                    <li  key={number}>
                     <a className="select"  onClick={()=> paginado(number)}>{number}</a>
                     </li>
                     ))}
              
                     </nav>
           
     
    )
}