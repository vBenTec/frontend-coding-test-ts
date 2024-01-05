<script lang="ts" setup>
const pageLinks = [
  { name: 'Home', routeName: 'Home' },
  { name: 'Pokemon', routeName: 'Pokemon' },
]

</script>
<template>
  <nav class="bg-gray-800 text-white">
    <div class="mx-auto px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img alt="Logo" class="w-14 h-14" src="../../assets/logo.svg" />
            <img alt="Logo" class="ml-3" src="../../assets/logotype.svg" />
          </div>
          <div class="flex ml-10 items-center align-middle">
            <div class="flex space-x-4">
              <router-link
                v-for="(link, index) in pageLinks"
                :key="`link-${index}`"
                :to="{name:link.routeName}"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                :class="{ 'bg-gray-900 text-white': $route.name.includes(link.routeName)}"
              >{{ link.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main class="flex justify-center">
    <router-view />
  </main>
</template>
