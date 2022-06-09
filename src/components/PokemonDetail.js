import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeadPokeball from "./HeadPokeball";
import vector7 from "../asset/vectors/Vector7.svg"
import vector8 from "../asset/vectors/Vector8.svg"
import Stats from "./pokemonDetails/Stats";
import Movements from "./pokemonDetails/Movements";
import { ColorType } from "../asset/ColorType";
import Abilities from "./pokemonDetails/Abilities";
import Type from "./pokemonDetails/Type";

const PokemonDetail = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    },[id])

    const types = pokemon.types?.[0]?.type.name;

    return (
        <div className="boxPokemonDetail">
            <HeadPokeball/>
            <section className="sectionInfo">
                <div className="boxDetail">
                    <div className="boxImg" style={{backgroundColor: `${ColorType.color[types]}`}}>
                        <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
                    </div>
                    <div className="boxId">
                        <h2 className="idPokemon"> #{pokemon.order}</h2>
                    </div>
                    <div className="namePokemon">
                        <img className="vector" src={vector7} alt="" />
                        <h1>{pokemon.name?.charAt(0).toUpperCase()}{pokemon.name?.slice(1)}</h1>
                        <img className="vector" src={vector8} alt="" />
                    </div>
                    <div className="boxTriage">
                        <div>
                            Weight  
                            <h3>{pokemon.weight}</h3>
                        </div>
                        <div>
                            Height 
                            <h3>{pokemon.height}</h3>    
                        </div>
                    </div> 
                </div>
                        
                <div className="boxFeatures">
                    <div className="boxData">
                        <Type pokemon={pokemon}/>
                        <Abilities pokemon={pokemon}/>
                    </div>
                    <>
                        <Stats pokemon={pokemon}/>
                    </>
                </div>
            </section>

            <section className="sectionMovements">
                <Movements pokemon={pokemon}/>
            </section>
        </div>
    );
}
 
export default PokemonDetail;