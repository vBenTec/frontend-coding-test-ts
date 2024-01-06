<script setup lang="ts">
import MagicIcon from '@/components/library/MagicIcon.vue'
import type { Pokemon } from '@/types/pokemonApi.ts'
import usePokemon from '@/composables/usePokemon'
import { v4 as uuidv4 } from 'uuid'

// ************* TYPES ************* //
type Name = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed'

interface Image {
  [key: string]: string;
}

// ************* PROPS ************* //
const props = defineProps<Pokemon>()

// ************* COMPOSABLES ************* //
const { getImages } = usePokemon()


// ************* FUNCTIONS | METHODS ************* //
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
</script>

<template>
  <header v-bind="$attrs" class="flex justify-between">
    <h2 class="uppercase">{{ species.name }}</h2>
    <div><span class="font-medium text-[0.6rem]">Exp</span> <span class="text-xl font-bold">{{ base_experience
      }}</span></div>
  </header>

  <div v-bind="$attrs" class="flex justify-center border rounded-lg mb-6" role="list">
    <div role="listitem" class="h-40" v-for="(value, key) in getImages(sprites, 'front')"
         :key="uuidv4()">
      <img class="w-full h-full object-center block" :src="value" alt="back">
    </div>
  </div>
  <div class="bg-logo-yellowish-dark rounded-lg p-4 mb-auto">
    <ul class="mx-auto max-w-[15rem] font-bold text-gray-900">
      <li v-for="(stat, index) in stats" :key="uuidv4()">
        <dl class="flex justify-between">
          <dt class="flex items-center gap-2">
            <base-icon class="text-gray-700" scale="1.5" :name="getIcon(stat.stat['name'])" />
            <span>{{ stat.stat['name'][0].toUpperCase() + stat.stat['name'].slice(1) }}</span>
          </dt>
          <dd>{{ stat.base_stat }}</dd>
        </dl>
      </li>
    </ul>
  </div>

  <footer v-bind="$attrs" class="flex gap-3 justify-center items-center">
    <div v-if="getTypes(types)" class="flex gap-8">
      <magic-icon v-for="(t, index) in getTypes(types)"
                  :key="uuidv4() + index" styling="light-gray" class="flex-col mb-5 w-20 h-20"
                  :icon="{name:t.icon, scale: 1.4}">
        <span class='font-medium'>{{ t.type[0].toUpperCase() + t.type.slice(1) }}</span>
      </magic-icon>
    </div>
  </footer>
</template>
