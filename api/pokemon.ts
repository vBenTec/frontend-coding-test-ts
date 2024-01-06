// ************* import TYPES ************* //
import type { ResponseAllPokemon, ResponsePokemon } from '@/types/pokemonApi'
// ************* import UTILS & HELPERS ************* //
import axios from 'axios'
// ************* import ENDPOINTS ************* //
import { endpointsPokemon } from './endpoints'

const { urlGetAll, getOneUrl } = endpointsPokemon

export default {
  getAllPokemon: (): Promise<ResponseAllPokemon> => axios.get(urlGetAll),
  getPokemon: (idOrName: string): Promise<ResponsePokemon> => axios.get(getOneUrl(idOrName)),
}