import { ICharacter, ILocation, IOrigin } from '@/interfaces'
import { Origin } from './origin'
import { Location } from './location'

export class Character implements ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: IOrigin
  location: ILocation
  image: string
  episode: string[]
  url: string
  created: Date

  constructor(character: ICharacter) {
    this.id = character.id
    this.name = character.name
    this.status = character.status
    this.species = character.species
    this.type = character.type
    this.gender = character.gender
    this.origin = new Origin(character.origin)
    this.location = new Location(character.location)
    this.image = character.image
    this.episode = character.episode
    this.url = character.url
    this.created = new Date(character.created)
  }
}
