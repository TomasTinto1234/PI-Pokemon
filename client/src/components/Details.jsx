import React from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import "./Details.css"

export default function Details(){
    const dispatch = useDispatch()
    const myPokemon = useSelector((state)=> state.details)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetail(id));
    },[dispatch])


    return (
        <div>

             <div >
            <p>
                <Link to= '/home' ><button className="select">Return</button></Link>

            </p>
            </div>
        <div className="pokemon-card-conteiner">
            
            {
                myPokemon.length > 0 ?
                <div className="pokemon-card">
                    <div className="background">
                    <img src= {myPokemon[0].image} alt='' width= '200px' height= '250px' className="image-details"/>
                    </div>
                    <div className="content">
                        <h1 className="pokemon-name">{myPokemon[0].name}</h1>
                    <h3 className="pokemon-type">{!myPokemon[0].createdInDb? myPokemon[0].types : myPokemon[0].types.map(e => e.name + (' '))}</h3>
                   <div className="pokemon-stats">
                    <h4>Id: {myPokemon[0].id}</h4>
                    <h4>Hp: {myPokemon[0].hp}</h4>
                    <h4>Attack: {myPokemon[0].attack}</h4>
                    <h4>Defense: {myPokemon[0].defense}</h4>
                    <h4>Speed: {myPokemon[0].speed}</h4>
                    <h4>Height: {myPokemon[0].height}</h4>
                    <h4>Weight: {myPokemon[0].weight}</h4>
                    </div>
                    
                   </div>
                     
                </div> :
                <div>
                <p>Loading...</p> 
                <img src="https://www.cpokemon.com/wp-content/uploads/2019/01/pikachu-zzz-1920x1200-300x200.jpg" alt=""/>   
                </div>
            }
         
        </div>
            </div>
        
    )
}