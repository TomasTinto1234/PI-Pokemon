import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  filterPokemonsByType,
  filterCreated,
  orderByName,
  orderByAttack,
  getTypes,
  
} from "../actions/index";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "./Home.css"

export default function Home() {
  const dispatch = useDispatch();
  const totalpokemon = useSelector((state) => state.pokemons); // voy al array en el Reducer y me traigo el state
  // const types = useSelector((state) => state.types); //
  const [orden, setOrden] = useState("");
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons =
    Array.isArray(totalpokemon) &&
    totalpokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes()) // llamo al action creator que me trae la info desde el back
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllPokemons(e)); // por si se bugeea
  }
 
 

  function handleFilterType(e) {
    dispatch(filterPokemonsByType(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`${e.target.value}`);
  }

  function handleSortAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`${e.target.value}`);
  }

  return (
    <div>
      <div>
      <SearchBar/>
      </div>
      <h1>Pokemons app</h1>
      
      <Link to="/pokemons"><button className="select">Create new Pokemon</button></Link>
      <div>
      <button className="select"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Refresh Pokemons..
      </button>
        {/* esto seria el e.target.value  cada uno de los values que utilizamos en las actions!!*/}
        <select
          className="select"
          onChange={(e) => {
            handleSort(e);
          }}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <select
          className="select"
          onChange={(e) => {
            handleSortAttack(e);
          }}
        >
          <option value="may">+ Attack</option>
          <option value="menor">- Attack</option>
        </select>
        <select
          className="select"
          onChange={(e) => {
            handleFilterType(e);
          }}
        >
          <option value="all">All types</option>
          <option value="Normal">Normal</option>
          <option value="Fighting">Fighting</option>
          <option value="Flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>
        </select>
        <select
          className="select"
          onChange={(e) => {
            handleFilterCreated(e);
          }}
        >
          <option value="All">All Pokemons</option>
          <option value="Api">Existing</option>
          <option value="createdInDb">Created In Db</option>
        </select>
       
        <Paginado
          pokemonPerPage={pokemonPerPage}
          totalpokemon={totalpokemon.length}
          paginado={paginado}
          />

        {currentPokemons ? (
          currentPokemons.map((pokemon) => {
            return (
              <div className="unica-card">
                 <div key={pokemon.id}>
                <Link to={'/details/' + pokemon.id}>
                <Card
                  key={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types?pokemon.types :pokemon.types[0] + pokemon.types[1]}
                  image={pokemon.image}
                  />
                  </Link>
              </div>
              </div>
             
            );
          })
        ) : (
          <div className="unica-card" key={totalpokemon.id}>
            
              <Card
                name={totalpokemon.name}
                types={totalpokemon.types.map((e) => e.name + " " )}
                image={totalpokemon.image}
                key={totalpokemon.id}
                ></Card>

          </div>
        )}
      </div>
    </div>
  );
}

