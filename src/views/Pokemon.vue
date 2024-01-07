<script setup lang="ts">
// ************* import COMPONENTS ************* //
import BaseList from '@/components/library/BaseList.vue'
import PokemonItem from '@/components/pokemon/PokemonItem.vue'
import LoadingSpinner from '@/components/library/LoadingSpinner.vue'
// ************* import COMPOSABLES ************* //
import api from '@api/pokemon'
import { useApi } from '@/composables/useApi'
// ************* import UTILS & HELPERS ************* //
import { computed, onMounted, ref } from 'vue'
import { addIcons } from 'oh-vue-icons'

// ************* Options ************* //
defineOptions({
  components: {
    PokemonItem,
  },
})

// ************* local STATE ************* //
const pokemonList = ref<{ name: string, url: string }[]>([])
const pokemonIconList = ref<{ name: string }[]>([])

// ************* GETTERS ************* //
const computedPokemonList = computed(() => {
  // Create dependency to update when icons are resolved
  // Only use-case !
  return pokemonIconList.value
    ? pokemonList.value.map((item) => ({
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
      }))
    : []
})

// ************* COMPOSABLES ************* //
const { isFetching, error, callApi } = useApi()

// ************* LIFE CYCLE HOOKS ************* //
onMounted(async () => {
  if (pokemonList.value.length > 0) return

  const res = await callApi(api.getAllPokemon, {
    successMsg: 'Pokemon list is available',
    cache: { id: 'pokemon-all', type: 'session' },
  })

  if (res.status === 200) {
    pokemonList.value = res.data.results
    const icons = await import(`oh-vue-icons/icons`)

    // contains more properties than just the name
    const iconList: { name: string }[] = pokemonList.value.map((pokemon) => {
      const iconName = `Pi${
        pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
      }`
      // @ts-ignore
      return icons[iconName]
    })
    // @ts-ignore
    addIcons(...iconList)

    // Just used to create a dependency to recompute when icons are resolved
    pokemonIconList.value = iconList
  }

})

</script>

<template>
  <section class="px-4 flex flex-col items-center">
    <h1 class="mb-8">A list of available Pokemon's</h1>
    <nav>
      <base-list
        v-if="!isFetching && pokemonIconList?.length"
        class="max-w-7xl mb-8"
        v-bind:items="computedPokemonList"
        data-test="pokemon-list"
      />
    </nav>
    <loading-spinner v-if="isFetching" />
    <p v-if="error && !isFetching">Could not get pokemon list !</p>
    <router-view v-if="pokemonIconList?.length" />
  </section>
</template>
