// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from 'vitest'
import PokemonCard from '@/components/pokemon/PokemonCard.vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils'
import dataBulbasaur from '@/components/__tests__/integration/responses/bulbasaur.json'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  GiBroadsword,
  GiEggDefense,
  GiGrass,
  GiHealthPotion,
  GiPoison,
  GiShield,
  GiSpeedometer,
  GiSwordsPower,
  PiBulbasaur
} from 'oh-vue-icons/icons'

const pokemon = 'bulbasaur'

const card = mount(PokemonCard, {
  global: {
    components: {
      'base-icon': OhVueIcon,
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  props: { ...dataBulbasaur },
})

// Not DRY create test helpers
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

setupFixture()

test('Should show data on front-side card', () => {
  expect(card.find("[data-test='card-title']").text()).includes(pokemon)
  expect(card.find("[data-test='experience']").text()).includes(64)
  // We should have more than one image
  expect(
    card.find("[data-test='pokemon-images']").findAll('*').length,
  ).toBeGreaterThan(1)
  // We should have more than one type
  expect(
    card.find("[data-test='type-icons-container']").findAll('*').length,
  ).toBeGreaterThan(1)
})

test('Should show data on back-side card', () => {
  expect(card.find("[data-test='height']").text()).includes('7')
  expect(card.find("[data-test='weight']").text()).includes('69')

  // We should have more than one image
  expect(
    card.find("[data-test='abilities-container']").findAll('*').length,
  ).toBeGreaterThan(1)
  // We should have more than one type
  expect(
    card.find("[data-test='moves-container']").findAll('*').length,
  ).toBeGreaterThan(1)

  // Test more reliable than the previous one
  // Test all fields
})
