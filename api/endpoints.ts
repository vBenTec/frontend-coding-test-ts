// ENV file
const API_BASE_URL = `https://pokeapi.co/api/v2`

const endpoints = {
  /**
   * @param {string} idOrName - can be the id or the name of the pokemon
   * **/
  getOneUrl(idOrName: string) {
    return `${API_BASE_URL}/pokemon/${idOrName}`
  },
  urlGetAll: `${API_BASE_URL}/pokemon`,
}

export default endpoints