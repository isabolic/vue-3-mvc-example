import { Expose, Type } from 'class-transformer'
import { AbilityEntry } from './ability-entry'

export class Pokemon {
  @Expose()
  @Type(() => AbilityEntry)
  public abilities: AbilityEntry[] = []

  @Expose()
  public base_experience?: number = undefined

  @Expose()
  public order?: number = undefined

  @Expose()
  @Type(() => AbilityEntry)
  past_abilities: AbilityEntry[] = []

  @Expose()
  public is_default: boolean = false

  @Expose()
  public name: string = ''

  public get fullPokemonName() {
    return `Pokemon: ${this.name}`
  }
}
