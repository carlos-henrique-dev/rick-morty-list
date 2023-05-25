import { ILocation } from './location'
import { IOrigin } from './origin'

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: IOrigin
  location: ILocation
  image: string
  episode: Array<string>
  url: string
  created: Date
}
