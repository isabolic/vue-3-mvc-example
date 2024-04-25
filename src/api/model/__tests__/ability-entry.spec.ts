import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'
import { describe, expect, it } from 'vitest'
import { AbilityEntry } from '../ability-entry'
import { validate } from 'class-validator'

describe('validate if', () => {
  it('should validate the object with all values successfully', async () => {
    const transformed = plainToInstance(AbilityEntry, {
      ability: {
        name: 'name',
        url: 'http://google.com'
      },
      is_hidden: false,
      slot: 1
    })

    const validationErrors = await validate(transformed, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true
    })

    expect(validationErrors.length).toBe(0)
  })

  it('should be valid in case only ability is provided', async () => {
    const transformed = plainToInstance(AbilityEntry, {
      ability: {
        name: 'name',
        url: 'http://google.com'
      }
    })

    const validationErrors = await validate(transformed, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true
    })

    expect(validationErrors.length).toBe(0)
  })

  it('should not be valid in case no values are provided', async () => {
    const transformed = plainToInstance(AbilityEntry, {})

    const validationErrors = await validate(transformed, {
      skipMissingProperties: false,
      whitelist: true,
      forbidNonWhitelisted: true
    })

    expect(validationErrors.length).toBe(1)
  })
})
