import type PokemonSearch from './PokemonSearch'
import { withModifiers } from 'vue'
import { searchInput } from './style'

export default function render(this: PokemonSearch) {
  return (
    <div class="search">
      <div class={searchInput}>
        <input v-model={this.query} onKeyup={withModifiers(this.onSearch, ['submit'])} />
        {this.name}
      </div>
    </div>
  )
}
