import PokemonItem from '@/components/pokemon-item/PokemonItem.vue'
import PokemonSearch from '@/components/pokemon-search/PokemonSearch'
import { usePokemonStore, type pokemonStore } from '@/stores/pokemon'
import { Component, Base, Setup } from 'vue-facing-decorator'

@Component({
  components: {
    PokemonItem,
    PokemonSearch
  }
})
export default class App extends Base {
  @Setup(() => usePokemonStore())
  pokemonStore!: pokemonStore
}
