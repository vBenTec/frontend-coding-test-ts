import axios from 'axios'
import endpoints from './endpoints'
import type { ResponseAllPokemon } from '@/types/pokemonApi'


export default {
  getAllPokemon: (): Promise<ResponseAllPokemon> => axios.get(endpoints.urlGetAll),
  getPokemon: (idOrName: string): Promise<ResponsePokemon> => axios.get(endpoints.getOneUrl(idOrName)),
}