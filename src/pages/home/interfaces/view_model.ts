import { ICharacter } from '@/interfaces'

import { IHomeDomain } from './domain'

export namespace HomeViewModel {
  export interface IProps {
    domain: IHomeDomain
  }

  export interface IReturn {
    characters: ICharacter[]
  }
}
