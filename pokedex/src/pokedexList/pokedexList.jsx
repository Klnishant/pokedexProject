import React, { useEffect, useState } from "react"
import axios from "axios";
import "./pokedexList.css"
import Pokemon from "../pokemonImage/pokemonImage";
function PokemonList() {

    const [pokemonList,setpokemonList]=useState([]);
    const [isloading,setisloading]=useState(true);
    const[pokedexUrl,setpokedexUrl]=useState('https://pokeapi.co/api/v2/pokemon');
    const[prevUrl,setprevUrl]=useState('');
    const[nextUrl,setnextUrl]=useState('');

    async function downloadPokemons(){
        const response=await axios.get(pokedexUrl);
        const pokemonResults=response.data.results;
        console.log(response.data);
        setnextUrl(response.data.next);
        setprevUrl(response.data.previous);

        const pokemonResultPromise=pokemonResults.map((pokemon)=> axios.get(pokemon.url));
        const pokemonData=await axios.all(pokemonResultPromise);
        console.log(pokemonData);

        const res=pokemonData.map((pokedata)=>{
            const pokemon=pokedata.data;

            return{
                id:pokemon.id,
                name:pokemon.name,
                Image:(pokemon.sprites.other) ? (pokemon.sprites.other.dream_world.front_default) :(pokemon.sprites.front_shiny),
                types:pokemon.types,
            }
        })

        console.log(res);
        setpokemonList(res);
        setisloading(false);
    }

    useEffect(()=>{
        downloadPokemons();
    },[pokedexUrl])
    return(
        <>
            <div id="pokemonListWraper">
                <div>Pokemon List</div>
                <div id="imageWrappers">
                {
                    (isloading) ? 'Loading.....' :
                    pokemonList.map((p)=><Pokemon name={p.name} image={p.Image} key={p.id} id={p.id} />)
                }
                </div>
                <div id="button">
                    <button disabled={prevUrl==null} onClick={()=>{setpokedexUrl(prevUrl)}} >prev</button>
                    <button disabled={nextUrl==null} onClick={()=>{setpokedexUrl(nextUrl)}} >next</button>
                </div>
            </div>
        </>
    )
}

export default PokemonList;