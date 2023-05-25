import { ILocation } from '@/interfaces'

export class Location implements ILocation {
  name: string
  url: string

  constructor(location: ILocation) {
    this.name = location.name
    this.url = location.url
  }
}
