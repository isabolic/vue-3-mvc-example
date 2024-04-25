import { Expose, Type } from 'class-transformer'
import { AbilityEntry } from './ability-entry'
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class Pokemon {
  @Expose()
  @Type(() => AbilityEntry)
  @IsArray()
  public abilities: AbilityEntry[] = []

  @Expose()
  @IsOptional()
  @IsNumber()
  public base_experience?: number = undefined

  @Expose()
  @IsOptional()
  @IsNumber()
  public order?: number = undefined

  @Expose()
  @Type(() => AbilityEntry)
  past_abilities: AbilityEntry[] = []

  @Expose()
  @IsOptional()
  @IsBoolean()
  public is_default: boolean = false

  @Expose()
  @IsString()
  public name: string = ''

  public get fullPokemonName() {
    return `Pokemon: ${this.name}`
  }
}
