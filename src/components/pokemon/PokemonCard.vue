<script setup lang="ts">
import type { Pokemon } from '@/types/pokemonApi.ts'
import BaseCard from '@/components/library/BaseCard.vue'
import CardFrontside from '@/components/pokemon/PokemonCard/CardFrontside.vue'
import CardBackside from '@/components/pokemon/PokemonCard/CardBackside.vue'

interface Image {
  [key: string]: string;
}

interface Props extends Pokemon {
  frontSideOnly?: boolean;
}

// ************* PROPS ************* //
const props = defineProps<Props>()

const getImages = (images: { [key: string]: string | null }[], side: 'front' | 'back' = 'front',
) => {
  if (!images) return {}

  const results: Record<string, string> = {}

  for (const key in images) {
    if (!!images[key] && key.startsWith(side + '_')) {
      results[key] = images[key]
    }
  }

  return results
}

type Name = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed'
const getIcon = (name: Name) => {
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
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
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
  }
}

const getTypes = (types) => {
  const newTypes = []
  types.forEach(({ type }) => {
    if (['earth', 'water', 'flying', 'fire', 'grass', 'normal', 'bug', 'poison'].includes(type.name)) {
      newTypes.push({
        type: type.name,
        icon: getTypeIcon(type.name),
      })
    }
  })
  return newTypes
}
</script>

<template>
  <base-card class="pokemon-card" :disable-hover="frontSideOnly" size="lg">
    <template #front-side>
      <card-frontside v-bind="props" />
    </template>

    <template #back-side>
      <card-backside v-bind="props" />
    </template>
  </base-card>
</template>

<style scoped lang="postcss">
.pokemon-card {
  :deep(.card__side) {
    @apply flex flex-col outline outline-8 outline-gray-300 bg-gradient-to-br from-logo-yellowish-base to-logo-yellowish-light;
  }
}
</style>