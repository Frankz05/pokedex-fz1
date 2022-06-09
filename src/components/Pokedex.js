import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokeCard from "./PokeCard";
import Pagination from "./Pagination";
import HeadPokeball from "./HeadPokeball";

const Pokedex = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemonSearch] = useState("")
    const [types, setTypes] = useState([])

    const [page, setPage] = useState(1);
    const pokePerPage = 9;
    const lastIndex = page*pokePerPage;
    const firstIndex = lastIndex - pokePerPage;
    const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex);

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then(res=> setPokemons(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setTypes(res.data.results));
    },[]);
    
    const search =()=>{
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterPokemons = (e)=>{
        axios.get(e.target.value)
            .then( (res) => setPokemons(res.data.pokemon));
    }
    console.log(pokemons);

    return (
        <div className="bodyPokedex">
            <HeadPokeball/>

            <p className="welcome"><span>Welcome </span><b>{user}</b>, Here you will find your favorite pokemon.</p>

            <div className="boxSearch">
                <form className="searchForm">
                    <input
                        className="inputSearch"
                        type="text"
                        value={pokemonSearch}
                        onChange={(e)=> setPokemonSearch(e.target.value)}
                        placeholder="Search Pokemon" />
                    <button className="buttonSearch" onClick={search}>Search</button>
                </form>
                <select onChange={filterPokemons}>
                    <option value="">all types</option>
                    {
                        types.map( type =>(
                            <option key={type.url} value={type.url}>{type.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="bodyPokeCard">
                {
                    pokemonPaginated.map(pokemon =>(
                        <PokeCard 
                            pokemonUrl={pokemon.url !== undefined? pokemon.url : pokemon.pokemon.url}
                            key={pokemon.url !== undefined? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
                <Pagination page={page} setPage={setPage} pokePerPage={pokePerPage} pokemons={pokemons}/>
            </div>
        </div>
    );
}
 
export default Pokedex;