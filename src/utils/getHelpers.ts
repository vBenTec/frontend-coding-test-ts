// ************* TYPES ************* //
import type { Type } from '@/types/pokemonApi'

type Name =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'
  | string
type PokemonTypes =
  | 'water'
  | 'earth'
  | 'flying'
  | 'grass'
  | 'poison'
  | 'fire'
  | 'bug'
  | 'normal'
  | string
type PokemonTypeWithIcon = { type: PokemonTypes; icon: string }[]

// ************* FUNCTIONS | METHODS ************* //
export const getIcon = <T = Name>(
  name: T,
  type: 'stat' | 'element' = 'stat',
) => {
  if (type === 'stat') {
    switch (name) {
      case 'hp':
        return 'gi-health-potion'
      case 'attack':
        return 'gi-swords-power'
      case 'defense':
        return 'gi-shield'
      case 'special-attack':
        return 'gi-broadsword'
      case 'special-defense':
        return 'gi-egg-defense'
      case 'speed':
        return 'gi-speedometer'
      default:
        throw new Error('No icon found check arguments for function invocation')
    }
  }
  if (type === 'element') {
    switch (name) {
      case 'water':
        return 'gi-water-drop'
      case 'earth':
        return 'gi-earth-crack'
      case 'flying':
        return 'gi-flying-trout'
      case 'grass':
        return 'gi-grass'
      case 'poison':
        return 'gi-poison'
      case 'fire':
        return 'gi-fire'
      case 'bug':
        return 'gi-bug-net'
      case 'normal':
        return 'md-catchingpokemon-twotone'
      default:
        throw new Error('No icon found check arguments for function invocation')
    }
  }
  return null
}
export const getTypes = (types: Type[]): PokemonTypeWithIcon => {
  const newTypes: PokemonTypeWithIcon = []
  types.forEach(({ type }) => {
    if (
      [
        'earth',
        'water',
        'flying',
        'fire',
        'grass',
        'normal',
        'bug',
        'poison',
      ].includes(type.name)
    ) {
      newTypes.push({
        type: type.name,
        icon: getIcon<PokemonTypes>(type.name, 'element') as string,
      })
    }
  })
  return newTypes
}