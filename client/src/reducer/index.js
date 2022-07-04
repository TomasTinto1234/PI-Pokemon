const initialState = {
  // inicializo el estado de cada reducer con un objeto, array vacio
  pokemons: [],
  allPokemons: [],
  types: [],
  details: [],
};

function rootReducer(state = initialState, action) {
  switch (
    action.type // en caso que la accion sea de tipo GET_ALL_POKEMONS, le actualizo el estado con el payload
    ) {
      case "GET_ALL_POKEMONS":
        return {
          ...state, // me retorno el estado actual
          pokemons: action.payload, // relleno el estado con el nuevo stado que viene en el action
          allPokemons: action.payload,
        };
        case "GET_NAME_POKEMON":
          return {
            ...state,
            pokemons: action.payload,
            // allPokemons: action.payload,
          };
    case "FILTER_BY_TYPE":
      const allPokemons = state.allPokemons;
      const typeFilter =
        action.payload === "all"
          ? allPokemons
          : allPokemons.filter((e) => e.types === action.payload);
      return {
        ...state,
        pokemons: typeFilter,
      };
    case "FILTER_CREATED":
      const allPokemons2 = state.allPokemons;
      const createdFilter =
        action.payload === "createdInDb"
          ? allPokemons2.filter((e) => e.createdInDb)
          : allPokemons2.filter((e) => !e.createdInDb);
      return {
        ...state,
        pokemons: action.payload === "All" ? state.allPokemons : createdFilter,
      };

    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedArr,
      };
    case "ORDER_BY_ATTACK":
      let sortedAttack =
        action.payload === "may"
          ? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedAttack,
      };
    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "POST_POKEMON":
      return {
        ...state,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload
      } 
    default:
      return state;
  }
}

export default rootReducer;
