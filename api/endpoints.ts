// ENV file
const API_POKEMON_URL = `https://pokeapi.co/api/v2`

export const endpointsPokemon = {
  /**
   * @param {string} idOrName - can be the id or the name of the pokemon
   * **/
  getOneUrl(idOrName: string) {
    return `${API_POKEMON_URL}/pokemon/${idOrName}`
  },
  urlGetAll: `${API_POKEMON_URL}/pokemon`,
}
