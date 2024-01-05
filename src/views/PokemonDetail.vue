<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useApi } from '@/composables/useApi'
import api from '@api/pokemon.ts'
import { onBeforeRouteUpdate } from 'vue-router'
import type { Pokemon } from '@/types/pokemonApi'
import BaseList from '@/components/library/BaseList.vue'

// ************* TYPES ************* //


interface Props {
  id: string
}

// ************* PROPS ************* //
const props = defineProps<Props>()

// ************* local STATE ************* //
const activePokemon = ref<Pokemon>()

const { callApi } = useApi()

onBeforeRouteUpdate(async () => {
  const res = await callApi(() => {
    return api.getPokemon(props.id)
  }, {
    successMsg: `Pokemon ${props.id} loaded`,
    errorMsg: `💥Pokemon ${props.id} could not get loaded. Please try again later.`,
    cache: { id: 'pokemon-' + props.id },
  })
  if (res.status === 200) {
    activePokemon.value = res.data
  }
})

</script>

<template>
  <section class="max-w-lg">
    <div v-if="activePokemon">
      <h2>{{ activePokemon?.species?.name }}</h2>
      <ul>
        <li v-for="(a, index) in activePokemon.abilities" :key="a + index">{{ a.ability.name }}</li>
      </ul>

      <pre>
      {{ activePokemon }}
    </pre>
    </div>
  </section>
</template>

<style scoped>

</style>