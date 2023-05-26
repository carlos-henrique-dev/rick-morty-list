import { IApiResponse } from '../infra'
import { ICharacter } from '../models'

export interface ICharacterService {
  getCharacters(params: { page: number }): Promise<IApiResponse<Array<ICharacter>>>

  getCharacterDetails(id: number): Promise<ICharacter>
}
