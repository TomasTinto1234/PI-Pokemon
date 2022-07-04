import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";



  function validate(input) {
    let errors = {}
    if (!input.name) {
      errors.name = "Name must be completed"
    }
    return errors
  }
export function PokemonCreated() {
  const dispatch = useDispatch()
  const history = useHistory()
  const types = useSelector((state) => state.types)
  const [errors, setErrors] = useState({})
  
  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "", 
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch])

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
  }
  function handleSelect(e) {
    input.types.length < 2
      ? setInput({
          ...input,
          types: [...input.types, e.target.value],
        })
      : alert("Max two types")
  }
  function handleDelete(e) {
    setInput({
      ...input,
      types: input.types.filter((el) => el !== e),
    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(input)
    dispatch(postPokemon(input))
    alert("Pokemon created")
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
    history.push("/home")
  }

  return (
    <div >
      <h1>CREAT POKEMONS!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <p>
            <label>Name: </label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p>{errors.name}</p>}
          </p>
          <p>
            <label>Hp: </label>
            <input
              type="number"
              value={input.hp}
              name="hp"
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p>
            <label>Attack: </label>
            <input
              type="number"
              value={input.attack}
              name="attack"
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p>
            <label>Defense: </label>
            <input
              type="number"
              value={input.defense}
              name="defense"
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p>
            <label>Speed: </label>
            <input
              type="number"
              value={input.speed}
              name="speed"
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p>
            <label>Height: </label>
            <input
              type="number"
              value={input.height}
              name="height"
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p>
            <label>Weight: </label>
            <input
              type="number"
              value={input.weight}
              name="weight"
              onChange={(e) => handleChange(e)}
            />
          </p>
          <p>
            <label>Image: </label>
            <input
              type="text"
              value={input.image ? input.image : input.image}
              name="image"
              onChange={(e) => handleChange(e)}
            />
          </p>
        </div>
        <div >
          <div>
          <p >Types: </p>
          <select  onChange={(e) => handleSelect(e)} >
            {types.map((e) => (
              <option key={e.name} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
            </div>
          <ul >
            <p>{input.types? input.types.map((e) => e + ", "): input.types[0] + input.types[1]}</p>
          </ul >
          <div>
          <button className="select" type="submit">Create Pokemon</button>
          <Link to="/Home">
            <button className="select">back Home</button>
          </Link>
          </div>
        </div>
      </form>
      {input.types.map((e) => (
        <div key={e.name}>
          <p key={e.name}>{e}</p>
          <button className="select" onClick={() => handleDelete(e)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
