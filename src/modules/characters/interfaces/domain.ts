import { ICharacter, ICharacterService } from '@/interfaces'

export namespace Domain {
  export interface Params {
    charactersService: ICharacterService
  }

  export interface ICharactersDomain {
    getCharacters(): Promise<Array<ICharacter>>
    currentPage: number
    maxPages: number
  }
}
