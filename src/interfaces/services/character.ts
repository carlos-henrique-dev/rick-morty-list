import { ICharacter } from '../models'

export interface ICharacterService {
  getCharacters(): Promise<Array<ICharacter>>

  getCharacterDetails(id: number): Promise<ICharacter>
}
