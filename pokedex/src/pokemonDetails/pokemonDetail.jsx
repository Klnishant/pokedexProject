import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokemonDetail.css'

function PokemonDetail(){
    const {id}=useParams();
    const [pokemon,setpokemon]=useState({});

    async function downloadPokemon(){
        const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response.data);

        setpokemon({
            name:response.data.name,
            Image:response.data.sprites.other.dream_world.front_default,
            height:response.data.height,
            weight:response.data.weight,
            types:response.data.types.map((t)=>t.type.name),
        })

        console.log(pokemon);
    }

    useEffect(()=>{
        downloadPokemon();
    },[]);
    return(
        <>
            <div id="pokemonDetailsWrapper">
                <div id="pokemonNaam">{pokemon.name}</div>
                <div id="pokemonPhoto"><img src={pokemon.Image} alt="" /></div>
                <div className="text">Height:{pokemon.height}</div>
                <div className="text">Weight:{pokemon.weight}</div>
                <div>
                    {/* {pokemon && pokemon.types.map((t)=> <><div key={t}>{t}</div></>)} */}
                </div>
            </div>
        </>
    )
}

export default PokemonDetail;