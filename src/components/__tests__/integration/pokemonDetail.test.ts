// eslint-disable-next-line import/no-extraneous-dependencies
import { test, vi } from 'vitest'
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils'
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import PokemonDetail from '@/views/PokemonDetail.vue'
import responseDataBulbasaur from '@/components/__tests__/integration/responses/bulbasaur.json'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  PiBulbasaur,
  GiEggDefense,
  GiPoison,
  GiGrass,
  GiSpeedometer,
  GiBroadsword,
  GiShield,
  GiSwordsPower,
  GiHealthPotion,
} from 'oh-vue-icons/icons'

const setupFixture = () => {
  addIcons(
    PiBulbasaur,
    GiEggDefense,
    GiPoison,
    GiGrass,
    GiSpeedometer,
    GiBroadsword,
    GiShield,
    GiSwordsPower,
    GiHealthPotion,
  )
}

// beforeEach(() => {
// If we make more tests relying on the same setup
setupFixture()
// })
const pokemon = 'bulbasaur'

test('PokemonDetail', async () => {
  vi.mock('@/composables/useApi', () => ({
    useApi: () => ({
      callApi: vi.fn().mockResolvedValue({
        status: 200,
        data: responseDataBulbasaur,
      }),
      isFetching: false,
    }),
  }))

  const wrapper = mount(PokemonDetail, {
    global: {
      components: {
        'base-icon': OhVueIcon,
      },
    },
    props: {
      id: pokemon,
    },
  })
  // Wait for the next DOM update cycle
  await wrapper.vm.$nextTick()
  // Check if the switch component is rendered
  expect(wrapper.findComponent({ name: 'base-switch' }).exists()).toBe(true)

  // Check if the PokemonCard component receives the correct props
  // expect(wrapper.findComponent({ name: 'pokemon-card' }).props()).toEqual(
  //   responseDataBulbasaur,
  // )

  // Simulate the API call in progress
  // wrapper.vm.isFetching = true
  // await wrapper.vm.$nextTick()

  // Check if the LoadingSpinner component is rendered
  // expect(wrapper.findComponent({ name: 'loading-spinner' })).toBe(true)

  // Simulate the API call failure
  // wrapper.vm.isFetching = false
  // wrapper.vm.callApi = vi.fn().mockResolvedValue({ status: 500 })
  // await wrapper.vm.$nextTick()

  // Check if the error message is displayed
  // expect(wrapper.text()).toContain('Could not get pokemon !')
})

test('PokemonDetail Switch Active', async () => {
  vi.mock('@/composables/useApi', () => ({
    useApi: () => ({
      callApi: vi.fn().mockResolvedValue({
        status: 200,
        data: responseDataBulbasaur,
      }),
    }),
  }))

  const wrapper = mount(PokemonDetail, {
    global: {
      components: {
        'base-icon': OhVueIcon,
      },
    },
    props: {
      id: pokemon,
    },
  })
  // Wait for the next DOM update cycle
  await wrapper.vm.$nextTick()
  // Check if the switch component is rendered
  expect(wrapper.findComponent({ name: 'base-switch' }).exists()).toBe(true)

  // Simulate the toggle of the BaseSwitch component to ON
  // wrapper
  //   .findComponent({ name: 'base-switch' })
  //   .vm.$emit('update:modelValue', true)
  // await wrapper.vm.$nextTick()

  // Check if the frontSideOnly prop of the PokemonCard component changes
  // expect(
  //   wrapper.findComponent({ name: 'PokemonCard' }).props().frontSideOnly,
  // ).toBe(true)
})
