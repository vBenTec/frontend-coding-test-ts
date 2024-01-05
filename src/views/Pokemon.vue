<script setup lang="ts">
import BaseList from '@/components/library/BaseList.vue'
import api from '@api/pokemon.ts'
import { computed, onMounted, ref } from 'vue'
import { useApi } from '@/composables/useApi.ts'
import PokemonItem from '@/components/pokemon/PokemonItem.vue'
import { addIcons } from 'oh-vue-icons'

defineOptions({
  components: {
    PokemonItem,
  },
})

const pokemonList = ref<{ name: string, url: string }[]>([])
const pokemonIconList = ref([])

const computedPokemonList = computed(() => {
  // Create dependency to update when icons are resolved
  // Only use-case !
  return pokemonIconList.value ? pokemonList.value.map((item) => ({
    id: item.name + Math.random() * 1000,
    component: PokemonItem,
    link: {
      name: 'PokemonDetail',
      params: {
        id: item.name,
      },
    },
    attrs: {
      icon: `pi-${item.name}`,
      name: item.name,
      url: item.url,
    },
  })) : []
})

const { isFetching, error, callApi } = useApi()

onMounted(async () => {
  if (pokemonList.value.length > 0) return

  const res = await callApi(api.getAllPokemon, {
    successMsg: 'Pokemon list is available',
    cache: { id: 'pokemon-all' },
  })

  if (res.status === 200) {
    pokemonList.value = res.data.results
    const icons = await import(`oh-vue-icons/icons`)

    const iconList = pokemonList.value.map((pokemon) => {
      const iconName = `Pi${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`
      return icons[iconName]
    })
    addIcons(...iconList)
    // Just used to create a dependency to recompute when icons are resolved
    pokemonIconList.value = iconList
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