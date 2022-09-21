function formatPokemonList(data = []) {
  return data.map((pokemon) => {
    return {
      id: pokemon.id,
      image: pokemon.sprites.front_default,
      name: pokemon.species.name,
      types: pokemon.types
    }
  })
}
export default formatPokemonList;