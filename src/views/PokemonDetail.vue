<script setup lang="ts">
// ************* import COMPONENTS ************* //
import PokemonCard from '@/components/pokemon/PokemonCard.vue'
import LoadingSpinner from '@/components/library/LoadingSpinner.vue'
import BaseSwitch from '@/components/library/BaseSwitch.vue'

// ************* import UTILS ************* //
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import api from '@api/pokemon'

// ************* import COMPOSABLES ************* //
import { useApi } from '@/composables/useApi'

// ************* import TYPES ************* //
import type { Pokemon } from '@/types/pokemonApi'
import type { RouteLocation } from 'vue-router'

// ************* TYPES ************* //
interface Props {
  id: string
}

// ************* PROPS ************* //
const props = defineProps<Props>()

// ************* local STATE ************* //
const activePokemon = ref<Pokemon>()
const frontSideOnly = ref<boolean>(false)

// ************* COMPOSABLES ************* //
const { callApi, isFetching } = useApi()

// ************* FUNCTIONS | METHODS ************* //
const fetchPokemon = async (id: string) => {
  const res = await callApi(
    () => {
      return api.getPokemon(id)
    },
    {
      successMsg: `Pokemon ${id} loaded`,
      errorMsg: `💥We could not get the Pokemon ${id}. Please try again later.`,
      cache: { id: `pokemon-${id}`, type: 'session' },
    },
  )

  if (res.status === 200) {
    activePokemon.value = res.data
  }
}

// ************* LIFE CYCLE HOOKS ************* //
onMounted(async () => {
  await fetchPokemon(props.id)
})

onBeforeRouteUpdate(async (to: RouteLocation) => {
  await fetchPokemon(<string>to.params.id)
})
</script>

<template>
  <section class="flex flex-col items-center">
    <base-switch
      v-model="frontSideOnly"
      class="mb-8"
      label="Don't show more infos"
    />
    <pokemon-card
      v-if="activePokemon && !isFetching"
      data-test="loading-spinner"
      class="w-[30rem] h-[50rem] !shadow-none"
      v-bind:front-side-only="frontSideOnly"
      v-bind="activePokemon"
    />
    <loading-spinner v-else-if="isFetching" />
    <p data-test="error-message" v-else>Could not get pokemon !</p>
  </section>
</template>

