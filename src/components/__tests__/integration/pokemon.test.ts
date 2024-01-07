// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from 'vitest'
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils'
// import { createApp } from 'vue'
import Pokemon from '@/views/Pokemon.vue'

test('Pokemon component', () => {
  const wrapper = mount(Pokemon)
  // Mock response from API
  // Check if a list of pokemon is rendered
})