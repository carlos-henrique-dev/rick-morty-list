import { ICharacter, ICharacterStore } from '@/interfaces'

import { Domain } from './domain'

export namespace HomeViewModel {
  export interface IProps {
    domain: Domain.IHomeDomain
    characterStore: ICharacterStore
  }

  export interface IReturn {
    characters: ICharacter[]
    loading: boolean
  }
}
