import React from 'react'
import { useEffect, useState } from 'react';
import Card from './card';

function Listpoke() {
    const [pokemons, setPokemons] = useState([]);
    const [input, setInput] = useState("");
    const [filterPokemons, setFilterPokemons] = useState([]);


    useEffect(() => {
        async function getPokemon() {
            const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
            const data = await response.json();
            setPokemons(data);
            setFilterPokemons(data);
        }

        getPokemon();
    }, []);

    useEffect(() => {
        let filter = pokemons.filter((item) => 
            item.name.toLowerCase().includes(input)
        );
        setFilterPokemons(filter);
    }, [input]);

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    console.log(pokemons);

    return (
        <div>

            <input
            name='input'
            type='text'
            placeholder='search pokemon'
            value={input}
            onChange={handleInput}
            />
            
            
            <h1>Pokemon</h1>
            

            {filterPokemons == 0 ? (
                <h1>data gk ada kimak</h1>
            ) : (
                <div className="pokemon">
                    {filterPokemons.map((pokemon, index) => (
                        <Card key={index} pokemon={pokemon} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Listpoke
