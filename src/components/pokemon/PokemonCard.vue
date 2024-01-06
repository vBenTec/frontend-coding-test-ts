<script setup lang="ts">
import type { Pokemon } from '@/types/pokemonApi.ts'
import BaseCard from '@/components/library/BaseCard.vue'
import CardFrontside from '@/components/pokemon/PokemonCard/CardFrontside.vue'
import CardBackside from '@/components/pokemon/PokemonCard/CardBackside.vue'

interface Props extends Pokemon {
  frontSideOnly?: boolean;
}

// ************* PROPS ************* //
const props = defineProps<Props>()
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