import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'
import { describe, expect, it } from 'vitest'
import { Ability } from '../ability'
import { validate } from 'class-validator'

describe('validate if', () => {
  it('should validate the object with both values successfully', async () => {
    const transformed = plainToInstance(Ability, {
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
    const transformed = plainToInstance(Ability, {
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
    const transformed = plainToInstance(Ability, {
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
    const transformed = plainToInstance(Ability, {})

    const validationErrors = await validate(transformed, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true
    })

    expect(validationErrors.length).toBe(0)
  })
})
