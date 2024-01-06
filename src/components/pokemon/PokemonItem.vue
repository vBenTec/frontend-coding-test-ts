<script setup lang="ts">
// ************* PROPS ************* //
defineProps<{ name: string, url: string, icon: string }>()
</script>

<template>
  <dl class="">
    <dt class="title">
      <base-icon v-if="icon" scale="1.4" :name="icon" />
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
}
</style>