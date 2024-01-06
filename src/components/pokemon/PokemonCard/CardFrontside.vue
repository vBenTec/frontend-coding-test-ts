<script setup lang="ts">
import MagicIcon from '@/components/library/MagicIcon.vue'
import type { Pokemon } from '@/types/pokemonApi'
import usePokemon from '@/composables/usePokemon'
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid'
import { getIcon, getTypes } from '@/utils/getHelpers'
import { capitalizeLetter } from '@/utils/stringHelpers'

// ************* PROPS ************* //ƒ
defineProps<Pokemon>()

// ************* COMPOSABLES ************* //
const { getImages } = usePokemon()
</script>

<template>
  <header v-bind="$attrs" class="flex justify-between">
    <h2 class="uppercase">{{ species.name }}</h2>
    <div>
      <span class="font-medium text-[0.6rem]">Exp</span>
      <span class="text-xl font-bold">
        {{ base_experience }}
      </span>
    </div>
  </header>

  <div class="flex justify-center border rounded-lg mb-6" role="list">
    <div
      v-for="(value, key) in getImages(sprites, 'front')"
      v-bind:key="uuidv4() + key"
      role="listitem"
      class="h-40"
    >
      <img class="w-full h-full object-center block" v-bind:src="value" alt="back">
    </div>
  </div>

  <div class="bg-logo-yellowish-dark rounded-lg p-4 mb-auto">
    <ul class="mx-auto max-w-[15rem] font-bold text-gray-900">
      <li v-for="(stat, index) in stats" v-bind:key="uuidv4() + index">
        <dl class="flex justify-between">
          <dt class="flex items-center gap-2">
            <base-icon class="text-gray-700" scale="1.5" v-bind:name="getIcon(stat.stat['name'], 'stat')" />
            <span>{{ capitalizeLetter(stat.stat['name']) }}</span>
          </dt>
          <dd>{{ stat.base_stat }}</dd>
        </dl>
      </li>
    </ul>
  </div>

  <footer v-bind="$attrs" class="flex gap-3 justify-center items-center">
    <div v-if="getTypes(types)" class="flex gap-8">
      <magic-icon
        v-for="(t, index) in getTypes(types)"
        v-bind:key="uuidv4() + index"
        styling="light-gray"
        class="flex-col mb-5 w-20 h-20"
        v-bind:icon="{ name: t.icon, scale: 1.4 }"
      >
        <span class="font-medium">{{ capitalizeLetter(t.type[0]) }}</span>
      </magic-icon>
    </div>
  </footer>
</template>
