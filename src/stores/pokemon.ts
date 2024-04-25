import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Pokemon } from '@/api/model/pokemon'

export const usePokemonStore = defineStore('counter', () => {
  const pokemon = ref<Pokemon>()
  const setPokeomon = (newPokemon: Pokemon) => {
    pokemon.value = newPokemon
  }

  return { pokemon, setPokeomon }
})

export type pokemonStore = ReturnType<typeof usePokemonStore>
