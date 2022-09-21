import formatPokemonList from '../utils';
// https://pokeapi.co/api/v2/pokemon?offset=20&limit=20

async function fetchPokemonByName(name) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

export async function fetchTypes() {
  const resp = await fetch('https://pokeapi.co/api/v2/type');
  return resp;
}

async function fetchAllPokemons(page = 1, perPage = 126) {
  const pageOffset = (page - 1) * perPage;
  const allPokemonsURL = `https://pokeapi.co/api/v2/pokemon?offset=${pageOffset}&limit=${perPage}`;

  const result = await fetch(allPokemonsURL);
  const pokemons = await result.json();  

  const resolvedPromises = await Promise.all(
    pokemons.results.map((poke) => fetchPokemonByName(poke.name))
  );
  const resolvedPromisesJson = await Promise.all(
    resolvedPromises.map((result) => result.json())
  );

  const formated = formatPokemonList(resolvedPromisesJson);
  return formated;
}

export default fetchAllPokemons;