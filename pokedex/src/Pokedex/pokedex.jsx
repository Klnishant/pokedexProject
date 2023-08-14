import React from "react";
import Search from "../Search/search";
import './pokedex.css';
function Pokedex(){
    return(
        <>
            <div id="pokedexWrapper">
                <h1 id="pokedexHeading">Pokedex</h1>
                <Search />
            </div>
        </>
    )
}

export default Pokedex;