import axios from "axios";

export function getAllPokemons() {
  return async function (dispatch) {
    // me retorno una promesa
    try {
      var json = await axios.get("http://localhost:3001/pokemons"); // importo toda la info traida en el back
      return dispatch({
        type: "GET_ALL_POKEMONS", // le paso el tipo de action
        payload: json.data, // paso a json el data de la respuesta
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getTypes() {
  return async function (dispatch) {
    try {
      const info = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: "GET_TYPES",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      console.log(name);
      const json = await axios.get(
        `http://localhost:3001/pokemons?name=` + name
      );
      console.log(json);
      return dispatch({
        type: "GET_NAME_POKEMON",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    try {
        console.log(id)
      var json = await axios.get("http://localhost:3001/pokemons/" + id);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemons",
        payload
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}
export function filterPokemonsByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}
export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}
 
export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: "ORDER_BY_ATTACK",
    payload,
  };
}
