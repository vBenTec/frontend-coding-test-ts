<script setup lang="ts">
import BaseList from '@/components/library/BaseList.vue'
import api from '@api/pokemon.ts'
import { computed, onMounted, ref } from 'vue'
import { useApi } from '@/composables/useApi.ts'
import PokemonItem from '@/components/pokemon/PokemonItem.vue'

defineOptions({
  components: {
    PokemonItem,
  },
})

const pokemonList = ref<{ name: string, url: string }[]>([])

const computedPokemonList = computed(() => pokemonList.value.map((item) => ({
  id: item.name + Math.random() * 1000,
  component: PokemonItem,
  link: {
    name: 'PokemonDetail',
    params: {
      id: item.name,
    },
  },
  attrs: {
    name: item.name,
    url: item.url,
  },
})))

const { isFetching, error, callApi } = useApi()

onMounted(async () => {
  if (pokemonList.value.length > 0) return

  const res = await callApi(api.getAllPokemon, {
    successMsg: 'Pokemon list is available',
    cache: { id: 'pokemon-all' },
  })

  if (res.status === 200) {
    pokemonList.value = res.data.results
  }
})

</script>

<template>
  <section>
    <h1 class="mb-8">A list of available Pokemon's</h1>
    <base-list class="max-w-6xl mb-8" :items="computedPokemonList" />
    <router-view />
  </section>
</template>

<style scoped>

</style>