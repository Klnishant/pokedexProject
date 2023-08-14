import { Router,Route, Routes } from "react-router-dom";
import PokemonList from "../pokedexList/pokedexList";
import PokemonDetail from "../pokemonDetails/pokemonDetail";
import App from '../App.jsx'
import Pokedex from "../Pokedex/pokedex";

function CustomRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/pokemon/:id" element={<div>{<Pokedex/>}{<PokemonDetail/>}</div>}/>
            </Routes>
        </>
    )
}

export default CustomRoutes;