import { Expose, Type } from 'class-transformer'
import { Ability } from './ability'
import { IsBoolean, IsNumber, IsObject, IsOptional } from 'class-validator'

export class AbilityEntry {
  @Expose()
  @Type(() => Ability)
  @IsObject()
  public ability?: Ability = undefined

  @Expose()
  @IsOptional()
  @IsBoolean()
  public is_hidden?: boolean = undefined

  @Expose()
  @IsOptional()
  @IsNumber()
  public slot?: number = undefined
}
