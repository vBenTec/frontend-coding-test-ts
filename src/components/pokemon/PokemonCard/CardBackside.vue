<script setup lang="ts">
import type { Pokemon } from '@/types/pokemonApi.ts'
import usePokemon from '@/composables/usePokemon'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps<Pokemon>()

const { getImages } = usePokemon()

</script>

<template>
  <base-icon class="mx-auto mb-4" scale="4" :name="`pi-${name}`" />
  <div v-bind="$attrs" class="flex justify-center border rounded-lg" role="list">
    <div role="listitem" class="h-40" v-for="(value, key) in getImages(sprites, 'back')"
         :key="uuidv4()">
      <img class="w-full h-full object-center block" :src="value" :alt="`Image of a pokemon from the ${key}`">
    </div>
  </div>
  <dl class="grid grid-cols-2 bg-logo-yellowish-dark rounded-lg p-4 mb-auto font-bold text-gray-900">
    <dt>Height</dt>
    <dd>{{ height }}</dd>
    <dt>Weight</dt>
    <dd>{{ weight }}</dd>
  </dl>
  <h3>Moves</h3>
  <ul class="max-h-48 overflow-auto flex flex-wrap gap-3">
    <li class="bg-red-200 py-1 px-2 rounded-xl font-bold" v-for="(m, index) in moves" :key="m.move + index">
          <span class="text-red-950">
          {{ m.move.name }}
          </span>
    </li>
  </ul>
  <h3>Abilities</h3>
  <ul class="max-h-48 overflow-auto flex flex-wrap gap-3">
    <li class="bg-blue-200 py-1 px-2 rounded-xl font-bold" v-for="(a, index) in abilities"
        :key="a.ability.name + index">
          <span class="text-blue-950">
          {{ a.ability.name }}
          </span>
    </li>
  </ul>
</template>

<style scoped lang="postcss">

</style>