<script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '@/composables/useApi'
import api from '@api/pokemon.ts'
import { onBeforeRouteUpdate } from 'vue-router'
import PokemonCard from '@/components/pokemon/PokemonCard.vue'
import LoadingSpinner from '@/components/library/LoadingSpinner.vue'
import BaseSwitch from '@/components/library/BaseSwitch.vue'
import type { Pokemon } from '@/types/pokemonApi'

// ************* TYPES ************* //


interface Props {
  id: string
}

// ************* PROPS ************* //
const props = defineProps<Props>()

// ************* local STATE ************* //
const activePokemon = ref<Pokemon>()
const frontSideOnly = ref<boolean>(false)

const { callApi, isFetching } = useApi()

onBeforeRouteUpdate(async (to) => {
  const res = await callApi(() => {
    return api.getPokemon(to.params.id)
  }, {
    successMsg: `Pokemon ${to.params.id} loaded`,
    errorMsg: `💥Pokemon ${to.params.id} could not get loaded. Please try again later.`,
    cache: { id: 'pokemon-' + to.params.id },
  })
  if (res.status === 200) {
    activePokemon.value = res.data
  }
})

</script>

<template>
  <section class="max-w-lg flex flex-col items-center">
    <base-switch class="mb-8" label="Disable backside of card" v-model="frontSideOnly" />
    <pokemon-card v-if="activePokemon" :front-side-only="frontSideOnly" v-bind="activePokemon" />
    <loading-spinner v-else-if="isFetching" />
    <p v-else>Could not get pokemon !</p>
  </section>
</template>

<style scoped>

</style>