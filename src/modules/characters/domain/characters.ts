import { ICharacterService } from '@/interfaces'

import { Domain } from '../interfaces'

export default class CharactersDomain implements Domain.ICharactersDomain {
  charactersService: ICharacterService

  private _currentPage = 1
  private _maxPage = 1

  constructor({ charactersService }: Domain.Params) {
    this.charactersService = charactersService
  }

  getCharacters = async () => {
    const page = this.currentPage + 1
    const { results: characters, info } = await this.charactersService.getCharacters({ page })

    this._maxPage = info.pages
    this._currentPage += 1

    return characters
  }

  get currentPage(): number {
    return this._currentPage
  }

  get maxPages(): number {
    return this._maxPage
  }
}
