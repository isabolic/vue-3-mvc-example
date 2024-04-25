import { Component, Base, Emit, Setup } from 'vue-facing-decorator'
import render from './PokemonSearch.render'
import { fetchPokemon } from '@/api/pokemon-api'
import type { Pokemon } from '@/api/model/pokemon'
import { usePokemonStore, type pokemonStore } from '@/stores/pokemon'

@Component({
  render
})
export default class PokemonSearch extends Base {
  public query: string = 'pikachu'

  @Setup(() => usePokemonStore())
  pokemonStore!: pokemonStore

  public pokemonData: Pokemon | null = null

  public get name() {
    return this.pokemonData?.fullPokemonName
  }

  @Emit('search')
  public async onSearch() {
    this.pokemonData = await fetchPokemon(this.query)
    this.pokemonStore.setPokeomon(this.pokemonData)
    return this.pokemonData
  }
}
