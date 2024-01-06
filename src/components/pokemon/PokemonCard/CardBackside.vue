<script setup lang="ts">
// ************* import COMPOSABLES ************* //
import usePokemon from '@/composables/usePokemon'
// ************* import UTILS & HELPERS ************* //
import { v4 as uuidv4 } from 'uuid'
// ************* import TYPES ************* //
import type { Pokemon } from '@/types/pokemonApi.ts'

// ************* PROPS ************* //
defineProps<Pokemon>()

// ************* COMPOSABLES ************* //
const { getImages } = usePokemon()
</script>

<template>
  <base-icon class="mx-auto mb-4" scale="4" v-bind:name="`pi-${name}`" />
  <div
    v-bind="$attrs"
    class="flex justify-center border rounded-lg"
    role="list"
  >
    <div
      v-for="(value, key) in getImages(sprites, 'back')"
      v-bind:key="uuidv4() + key"
      role="listitem"
      class="h-40"
    >
      <img
        class="w-full h-full object-center block"
        v-bind:src="value"
        v-bind:alt="`Image of a pokemon from the ${key}`"
      />
    </div>
  </div>
  <dl
    class="grid grid-cols-2 bg-logo-yellowish-dark rounded-lg p-4 mb-auto font-bold text-gray-900"
  >
    <dt>Height</dt>
    <dd>{{ height }}</dd>
    <dt>Weight</dt>
    <dd>{{ weight }}</dd>
  </dl>
  <h3>Moves</h3>
  <ul class="max-h-48 overflow-auto flex flex-wrap gap-3">
    <li
      v-for="(m, index) in moves"
      v-bind:key="uuidv4() + index"
      class="bg-red-200 py-1 px-2 rounded-xl font-bold"
    >
      <span class="text-red-950">
        {{ m.move.name }}
      </span>
    </li>
  </ul>
  <h3>Abilities</h3>
  <ul class="max-h-48 overflow-auto flex flex-wrap gap-3">
    <li
      v-for="(a, index) in abilities"
      v-bind:key="a.ability.name + index"
      class="bg-blue-200 py-1 px-2 rounded-xl font-bold"
    >
      <span class="text-blue-950">
        {{ a.ability.name }}
      </span>
    </li>
  </ul>
</template>

<style scoped lang="postcss"></style>
