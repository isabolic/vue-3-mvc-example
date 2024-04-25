import { Expose, Type } from 'class-transformer'
import { Ability } from './ability'

export class AbilityEntry {
  @Expose()
  @Type(() => Ability)
  public ability?: Ability = undefined

  @Expose()
  public is_hidden?: boolean = undefined

  @Expose()
  public slot?: number = undefined
}
