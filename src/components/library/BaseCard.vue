<template>
  <component
    v-bind:is="tag"
    class="card"
    v-bind:class="[
      {
        'card--interactive':
          $slots['front-side'] &&
          $slots['front-side']()?.length > 0 &&
          $slots['back-side'] &&
          $slots['back-side']()?.length > 0,
      },
      { 'card--interactive-hover': !disableHover },
    ]"
  >
    <slot>
      <div class="card__side card__side--front" v-bind:class="[size? `size--${size}`: '' ]">
        <slot name="front-side" />
      </div>
      <div class="card__side card__side--back card__side--back-2" v-bind:class="[size? `size--${size}`: '' ]">
        <slot name="back-side" />
      </div>
    </slot>
  </component>
</template>

<script setup lang="ts">
// ************* TYPES ************* //
interface Props {
  tag?: 'div' | 'li'
  size?: 'sm' | 'md' | 'lg'
  disableHover?: boolean
}

// ************* PROPS ************* //
withDefaults(defineProps<Props>(), {
  tag: 'div',
})
</script>

<style scoped lang="postcss">
.card {
  @apply rounded-lg shadow;

  &--interactive {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;

    &-hover {
      &:hover .card__side--front {
        transform: rotateY(-180deg);
      }

      &:hover .card__side--back {
        transform: rotateY(0);
      }
    }
  }

  &__side {
    @apply top-0 left-0 absolute rounded-lg overflow-hidden;
    transition: all .8s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);

    &.size {
      &--sm {
        width: 15rem;
        height: 20rem;
      }

      &--md {
        width: 25rem;
        height: 30rem;
      }

      &--lg {
        width: 30rem;
        height: 40rem;
      }
    }

    &--front {
      @apply rounded-lg p-4;
    }

    &--back {
      @apply rounded-lg p-4;
      transform: rotateY(180deg);
    }
  }
}
</style>