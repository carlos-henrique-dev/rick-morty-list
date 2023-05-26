import { ICharacterService } from '@/interfaces'

import { Domain } from '../interfaces'

export default class HomeDomain implements Domain.IHomeDomain {
  charactersService: ICharacterService

  constructor({ charactersService }: Domain.Params) {
    this.charactersService = charactersService
  }

  getCharacters = async () => {
    const characters = await this.charactersService.getCharacters()
    return characters
  }
}
