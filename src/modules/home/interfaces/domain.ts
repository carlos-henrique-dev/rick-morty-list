import { ICharacter, ICharacterService } from '@/interfaces'

export namespace Domain {
  export interface Params {
    charactersService: ICharacterService
  }

  export interface IHomeDomain {
    getCharacters(): Promise<Array<ICharacter>>
  }
}
