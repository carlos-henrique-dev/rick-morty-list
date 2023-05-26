import { ICharacter } from '../models'

export interface ICharacterStore {
  characters: Array<ICharacter>
  loading: boolean
  pagination: {
    next: number | null
  }
  setCharacters: (characters: Array<ICharacter>) => void
  setNextPage: (next: number | null) => void
  setLoading: (loading: boolean) => void
}
