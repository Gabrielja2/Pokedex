import { useEffect, useContext, useState } from 'react';
import Context from '../context/context';
import fetchAllPokemons from '../services/fetch';

const PokemonList = () => {
  const [pokemonsList, setPokemonsList ] = useState([])
  const [isLoading, setIsLoading ] = useState(true);
  const { filterName } = useContext(Context);
  

  useEffect(() => {
    const callFetchPokemons = async () => {
      const pokemonsList = await fetchAllPokemons();
      setPokemonsList(pokemonsList);
      setIsLoading(false);
    };
    callFetchPokemons();
  }, []);

  const FilterByPokeName = pokemonsList.filter((poke) => poke.name.includes(filterName));

  
  return (
    <section className="flex flex-wrap justify-center gap-4 mt-10 mb-10">
      {isLoading ? (
        <p>Waiting is Loading...</p>
      ) : (
        FilterByPokeName.map((poke, i) => (
          <div key={i} className="flex flex-col w-48 border-2 border-cyan-500/95 rounded-md shadow-xl text-right ">
            <mark className ="self-start bg-cyan-600 text-cyan-50 align-start">{`#${poke.id}`}</mark>
              <div className="grid place-items-center">
                <img className="w-36" src={poke.image} alt="pokemon-img" />
                </div>
                <div>
                  <h4 className="text-left bg-cyan-500 text-cyan-50">{poke.name}</h4>            
            { 
              poke.types.length > 1 ?
              <div>
                <div>{poke.types[0].type.name}</div>
                <div>{poke.types[1].type.name}</div>
              </div> : (
                <div>{poke.types[0].type.name}</div>
              )          
            }
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default PokemonList;