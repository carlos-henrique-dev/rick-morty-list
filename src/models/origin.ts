import { IOrigin } from '@/interfaces'

export class Origin implements IOrigin {
  name: string
  url: string

  constructor(origin: IOrigin) {
    this.name = origin.name
    this.url = origin.url
  }
}
