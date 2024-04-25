import { Expose } from 'class-transformer'

export class Base {
  @Expose()
  public name?: string = undefined
  @Expose()
  public url?: string = undefined
}
