import { ICharacterService } from '@/interfaces'

import { Domain } from '../interfaces'

export default class HomeDomain implements Domain.IHomeDomain {
  charactersService: ICharacterService

  constructor({ charactersService }: Domain.Params) {
    this.charactersService = charactersService
  }

  getCharacters = async () => {
    const { results: characters } = await this.charactersService.getCharacters({ page: 1 })
    return characters
  }
}
