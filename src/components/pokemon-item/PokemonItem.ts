import { Component, Base, Prop } from 'vue-facing-decorator'
import { Pokemon } from '@/api/model/pokemon'

@Component
export default class PokemonItem extends Base {
  @Prop({ type: Pokemon, required: true })
  public pokemon!: Pokemon

  public get pokemonPlainData() {
    return JSON.stringify(this.pokemon)
  }
}
