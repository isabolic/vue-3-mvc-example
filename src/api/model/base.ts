import { Expose } from 'class-transformer'
import { IsOptional, IsString, IsUrl } from 'class-validator'

export class Base {
  @Expose()
  @IsOptional()
  @IsString()
  public name?: string = undefined

  @Expose()
  @IsOptional()
  @IsUrl()
  public url?: string = undefined
}
