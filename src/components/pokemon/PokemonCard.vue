<script setup lang="ts">
import type { Pokemon } from '@/types/pokemonApi.ts'
import BaseCard from '@/components/library/BaseCard.vue'

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
</script>

<template>
  <base-card class="pokemon-card" :disable-hover="frontSideOnly" size="lg">
    <template #front-side>
      <header class="flex justify-between">
        <h2 class="uppercase">{{ species.name }}</h2>
        <div><span class="font-medium text-[0.6rem]">Exp</span> <span class="text-xl font-bold">{{ base_experience
          }}</span></div>
      </header>
      <div class="flex justify-center border rounded-lg" role="list">
        <div role="listitem" class="h-40" v-for="(value, key) in getImages(sprites, 'front')" :key="key">
          <img class="w-full h-full object-center block" :src="value" alt="back">
        </div>
      </div>
      <ul>
        <li v-for="(stat, index) in stats" :key="stat.base_stat + index">
          <dl class="flex justify-between">
            <dt>{{ stat.stat['name'] }}</dt>
            <dd>{{ stat.base_stat }}</dd>
          </dl>
        </li>
      </ul>

      <footer>

      </footer>
    </template>

    <template #back-side>
      <h2 class="uppercase">Backside</h2>
      <div class="flex justify-center border rounded-lg" role="list">
        <div role="listitem" class="h-40" v-for="(value, key) in getImages(sprites, 'back')" :key="key">
          <img class="w-full h-full object-center block" :src="value" alt="back">
        </div>
      </div>
      <dl>
        <dt>Height</dt>
        <dd>{{ height }}</dd>
        <dt>Weight</dt>
        <dd>{{ weight }}</dd>
      </dl>
      <ul class="max-h-48 overflow-auto">
        <li v-for="(m, index) in moves" :key="m.move + index">{{ m.move.name }}</li>
      </ul>
      <ul>
        <li v-for="(a, index) in abilities" :key="a.ability.name + index">{{ a.ability.name }}</li>
      </ul>
    </template>
  </base-card>
</template>

<style scoped lang="postcss">
.pokemon-card {
  :deep(.card__side) {
    box-shadow: 0 0 0 1rem lightgray;
  }
}
</style>