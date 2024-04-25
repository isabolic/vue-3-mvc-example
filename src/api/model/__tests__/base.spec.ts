import { plainToInstance } from 'class-transformer'
import { describe, expect, it } from 'vitest'
import { Base } from '../base'
import { validate } from 'class-validator'

describe('validate if', () => {
  it('should validate the object with both values successfully', async () => {
    const transformed = plainToInstance(Base, {
      name: 'name',
      url: 'http://google.com'
    })

    const validationErrors = await validate(transformed, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true
    })

    expect(validationErrors.length).toBe(0)
  })

  it('should be valid in case only name is provided', async () => {
    const transformed = plainToInstance(Base, {
      name: 'name'
    })

    const validationErrors = await validate(transformed, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true
    })

    expect(validationErrors.length).toBe(0)
  })

  it('should be valid in case only url is provided', async () => {
    const transformed = plainToInstance(Base, {
      url: 'http://google.com'
    })

    const validationErrors = await validate(transformed, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true
    })

    expect(validationErrors.length).toBe(0)
  })

  it('should be valid in case no values are provided', async () => {
    const transformed = plainToInstance(Base, {})

    const validationErrors = await validate(transformed, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true
    })

    expect(validationErrors.length).toBe(0)
  })
})
