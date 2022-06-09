import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ColorType } from "../asset/ColorType";

const PokeCard = ({pokemonUrl}) => {
    const [pokemonCard, setPokemonCard] = useState({})
    const navigate = useNavigate();
    const type = pokemonCard.types?.[0]?.type.name;

    useEffect(()=>{
        axios.get(pokemonUrl)
            .then(res => setPokemonCard(res.data))
    },[pokemonUrl])

    return (
        <div className="pokeBox" onClick={()=> navigate(`/pokedex/${pokemonCard.id}`)} style={{backgroundColor: `${ColorType.color[type]}`}}>
            <div className="pokeCard" >
                <img src={pokemonCard.sprites?.other["official-artwork"].front_default} alt="" />
                <div className="infoCard">
                    <h2>{pokemonCard.name?.charAt(0).toUpperCase()}{pokemonCard.name?.slice(1)}</h2>
                    <h3>
                        {
                            pokemonCard.types?.length > 1 ?
                            `${pokemonCard.types?.[0]?.type.name} / ${pokemonCard.types?.[1]?.type.name}` :
                            `${pokemonCard.types?.[0]?.type.name}`
                        }
                    </h3>
                    <h4>type</h4>
                    <div className="pokeStats">
                        <div>
                            <p>HP</p>
                            <h2>{pokemonCard.stats?.[0].base_stat}</h2>
                        </div>
                        <div>
                            <p>ATTACK </p>
                            <h2>{pokemonCard.stats?.[1].base_stat}</h2>
                        </div>
                        <div>
                            <p>DEFENSE </p>
                            <h2>{pokemonCard.stats?.[3].base_stat}</h2>
                        </div>
                        <div>
                            <p>SPEED </p>
                            <h2>{pokemonCard.stats?.[5].base_stat}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PokeCard;