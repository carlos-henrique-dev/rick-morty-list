import { ICharacter, ICharacterStore } from '@/interfaces'

import { Domain } from './domain'

export namespace CharactersViewModel {
  export interface IProps {
    domain: Domain.ICharactersDomain
    characterStore: ICharacterStore
  }

  export interface IReturn {
    characters: ICharacter[]
    loading: boolean
    getNextPage: () => Promise<void>
    endOfList: boolean
  }
}
