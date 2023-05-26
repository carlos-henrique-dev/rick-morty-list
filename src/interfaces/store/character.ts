import { ICharacter } from '../models'

export interface ICharacterStore {
  characters: Array<ICharacter>
  setCharacters: (characters: Array<ICharacter>) => void
}
