import { IApiResponse, ICharacter, ICharacterService } from '@/interfaces'

export namespace Domain {
  export interface Params {
    charactersService: ICharacterService
  }

  export interface ICharactersDomain {
    getCharacters(params?: { page: number | null }): Promise<IApiResponse<Array<ICharacter>>>
    getNextPageFromURL(url: string): number | null
  }
}
