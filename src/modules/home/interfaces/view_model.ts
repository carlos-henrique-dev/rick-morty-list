import { ICharacter, ICharacterService, ICharacterStore } from '@/interfaces'

export namespace HomeViewModel {
  export interface IProps {
    characterService: ICharacterService
    characterStore: ICharacterStore
  }

  export interface IReturn {
    characters: ICharacter[]
    loading: boolean
  }
}
