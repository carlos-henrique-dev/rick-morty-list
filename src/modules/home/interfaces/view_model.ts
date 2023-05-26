import { ICharacter } from '@/interfaces'

import { Domain } from './domain'

export namespace HomeViewModel {
  export interface IProps {
    domain: Domain.IHomeDomain
  }

  export interface IReturn {
    characters: ICharacter[]
  }
}
