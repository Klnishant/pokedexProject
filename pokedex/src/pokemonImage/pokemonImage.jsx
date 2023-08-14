import { Link } from 'react-router-dom';
import './pokemonImage.css'
function Pokemon({name,image,id}){
    return(
        <>
           <div id="pokemonWrappers">
                <Link to={`/pokemon/${id}`}>
                    <div id='pokemonName'>{name}</div>
                    <div id='pokemonImage'><img src={image} alt={name} /></div>
                </Link>
           </div>
        </>
    )
}

export default Pokemon;