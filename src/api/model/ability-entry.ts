import { Expose, Type } from 'class-transformer'
import { Ability } from './ability'
import { IsBoolean, IsNumber, IsObject, IsOptional } from 'class-validator'

export class AbilityEntry {
  @Expose()
  @Type(() => Ability)
  @IsObject()
  public ability: Ability = new Ability()

  @Expose({ name: 'is_hidden' })
  @IsOptional()
  @IsBoolean()
  public isHidden?: boolean = undefined

  @Expose()
  @IsOptional()
  @IsNumber()
  public slot?: number = undefined
}
