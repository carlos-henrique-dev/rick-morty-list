import { IApiResponse, ICharacter, ICharacterService } from '@/interfaces'

export namespace Domain {
  export interface Params {
    charactersService: ICharacterService
  }

  export interface IHomeDomain {
    getCharacters(): Promise<IApiResponse<Array<ICharacter>>>
    getNextPageFromURL(url: string): number | null
  }
}
