<template>
  <ul
    class="layout"
    v-bind:class="
      {
        col: 'layout--col',
        row: 'layout--row',
        'row-wrap': 'layout--row-wrap',
      }[layout]
    "
  >
    <slot>
      <li
        v-for="(item, index) in items"
        v-bind:key="item.id || index + uuidv4()"
      >
        <router-link v-if="item.link" v-bind:to="{ ...item.link }">
          <component
            v-bind:is="item.component"
            v-bind="item.attrs || {}"
            v-on="item.events || {}"
          />
        </router-link>
        <component
          v-bind:is="item.component"
          v-else
          v-bind="item.attrs || {}"
          v-on="item.events || {}"
        />
      </li>
    </slot>
  </ul>
</template>

<script
  setup
  lang="ts"
  generic="
    T extends {
      id: string
      link?: { name: string; param: {}; query: string }
      attrs?: Record<string, string>
      events: Record<string, string>
      component: ComponentPublicInstance | VNode
    }
  "
>
// ************* TYPES ************* //
import type { ComponentPublicInstance, VNode } from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid'

interface Props {
  items: T[]
  layout?: 'col' | 'row' | 'row-wrap'
}

// ************* PROPS ************* //
withDefaults(defineProps<Props>(), {
  layout: 'row-wrap',
})
</script>

<style lang="postcss" scoped>
.layout {
  @apply flex gap-2;

  &--col {
    @apply flex-col;
  }

  &--row {
    @apply flex-row;

    &-wrap {
      @apply flex-wrap;
    }
  }
}
</style>
