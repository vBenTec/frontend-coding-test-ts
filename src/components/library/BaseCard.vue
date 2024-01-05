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

<template>
  <component :is="tag" class="card"
             :class="[{'card--interactive':  ($slots['front-side']&& $slots['front-side']()?.length > 0) && ($slots['back-side']&& $slots['back-side']()?.length > 0)}, {'card--interactive-hover': !disableHover}]">
    <slot>
      <div class="card__side card__side--front" :class="[size? `size--${size}`: '' ]">
        <slot name="front-side" />
      </div>
      <div class="card__side card__side--back card__side--back-2" :class="[size? `size--${size}`: '' ]">
        <slot name="back-side" />
      </div>
    </slot>
  </component>
</template>

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
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
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
      background-color: white;
    }

    &--back {
      @apply rounded-lg p-4;
      transform: rotateY(180deg);
      background-image: linear-gradient(to right bottom, #fff, #eee);
    }
  }
}
</style>