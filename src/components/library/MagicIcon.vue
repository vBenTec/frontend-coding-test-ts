<script setup lang="ts">
interface Props {
  icon: {
    name: string,
    scale?: number,
  },
  styling?: 'light-gray'
}

withDefaults(defineProps<Props>(), {
  styling: 'light-gray',
})

</script>

<template>
  <div :class="['icon-wrapper', `icon-wrapper--${styling}`]">
    <base-icon :class="[`icon-wrapper__icon--${styling}`]"
               :name="icon.name" :scale="icon.scale || 1" />
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.icon-wrapper {
  @apply z-0 relative flex justify-center items-center;

  /* Styling */
  /* LIGHT GREY */

  &--light-gray {
    @apply rounded-full text-gray-600;
  }

  &--light-gray::before,
  &--light-gray::after {
    content: '';
    @apply -z-10 absolute block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full;
  }

  &--light-gray::before {
    @apply w-[80%] h-[80%] -z-10 bg-gray-100;

  }

  &--light-gray::after {
    @apply w-[120%] h-[120%] -z-20 bg-[rgba(255,255,255,0.5)];
  }
}
</style>