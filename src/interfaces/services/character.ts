import { IApiResponse } from '../infra'
import { ICharacter } from '../models'

export interface ICharacterService {
  getCharacters(params: Record<string, any>): Promise<IApiResponse<Array<ICharacter>>>

  getCharacterDetails(id: number): Promise<ICharacter>

  getNextPageFromURL(url: string): number | null
}
