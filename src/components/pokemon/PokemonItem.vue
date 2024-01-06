<script setup lang="ts">
// ************* PROPS ************* //
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{ name: string, url: string, icon: string }>()
const route = useRoute()

const isActiveRoute = computed(() =>
  route.params.id?.toString()?.toLowerCase() === props.name.toLowerCase(),
)
</script>

<template>
  <dl v-bind:class="{ 'active-route': isActiveRoute }">
    <dt class="title">
      <base-icon v-if="icon" scale="1.4" v-bind:name="icon" />
      <span>
        {{ name }}
      </span>
    </dt>
  </dl>
</template>

<style lang="postcss" scoped>
dl {
  @apply bg-violet-500 p-3 shadow rounded-md drop-shadow-sm-center-purple transition-all hover:drop-shadow-md-center-purple hover:scale-105;

  .title {
    @apply text-xl font-bold text-white uppercase flex items-center gap-2;
  }

  &.active-route {
    @apply bg-violet-800 active:bg-violet-800;
  }
}


</style>