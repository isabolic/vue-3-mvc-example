import 'reflect-metadata'
import { describe, expect, it } from 'vitest'
import PokemonItem from '../PokemonItem.vue'
import { mount } from '@vue/test-utils'
import { Pokemon } from '@/api/model/pokemon'
import { plainToInstance } from 'class-transformer'

const pokemonData = {
  abilities: [
    {
      ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
      is_hidden: false,
      slot: 1
    },
    {
      ability: { name: 'lightning-rod', url: 'https://pokeapi.co/api/v2/ability/31/' },
      is_hidden: true,
      slot: 3
    }
  ],
  base_experience: 112,
  order: 35,
  past_abilities: [],
  is_default: true,
  name: 'pikachu'
}

describe('validate if', () => {
  it('should validate PokemonItem class', async () => {
    const pokemon = plainToInstance(Pokemon, pokemonData)

    const wrapper = mount(PokemonItem, {
      props: {
        pokemon: pokemon
      }
    })
    expect(wrapper.find('.pokemon-data').html().includes('lightning-rod')).toBe(true)
  })
})
