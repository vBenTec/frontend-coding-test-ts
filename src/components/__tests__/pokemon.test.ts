import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pokemon from '@/views/Pokemon.vue'

test('Pokemon component', () => {
  const wrapper = mount(Pokemon)

  // wrapper.setData({ isFetching: true })

  // Check if the loading spinner is displayed while fetching data
  const loadingSpinner = wrapper.findComponent({ name: 'LoadingSpinner' })
  // expect(loadingSpinner.html()).toBeFalsy()
  // is(loadingSpinner.exists(), true)


  // Simulate the end of the fetching process
  // wrapper.setData({ isFetching: false })

  // Check if the loading spinner is hidden after fetching data
  // is(loadingSpinner.exists(), false)
})