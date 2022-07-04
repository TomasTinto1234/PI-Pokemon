import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Card from "./components/Card";
import {PokemonCreated} from "./components/PokemonCreated";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path="/" component={LandingPage}/>
          <Route path="/Home" component={Home}/>
          <Route path = "/pokemons" component = {PokemonCreated}/>
          <Route path="/Card" component={Card}/>
          <Route path="/details/:id" component={Details}/>
       
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
