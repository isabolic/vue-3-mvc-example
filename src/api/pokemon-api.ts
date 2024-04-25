import { plainToInstance } from 'class-transformer'
import { ofetch } from 'ofetch'
import { Pokemon } from './model/pokemon'

const client = ofetch.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache'
  }
})

export const fetchPokemon = async (name: string) => {
  const data = await client(`/${name}`)
  return plainToInstance(Pokemon, data, { excludeExtraneousValues: true })
}
