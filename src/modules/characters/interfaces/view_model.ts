import { ICharacter, ICharacterService, ICharacterStore } from '@/interfaces'

export namespace CharactersViewModel {
  export interface IProps {
    characterService: ICharacterService
    characterStore: ICharacterStore
  }

  export interface IReturn {
    characters: ICharacter[]
    loading: boolean
    getNextPage: () => Promise<void>
    endOfList: boolean
  }
}
