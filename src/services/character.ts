import { ICharacter, ICharacterService, IHttpClient } from '@/interfaces'
import { Character } from '@/models'

export class CharacterService implements ICharacterService {
  httpClient: IHttpClient
  baseUrl = ''
  endpoint = 'character'

  constructor({ baseUrl, httpClient }: { baseUrl: string; httpClient: IHttpClient }) {
    this.httpClient = httpClient
    this.baseUrl = baseUrl
  }

  getCharacters = async (): Promise<ICharacter[]> => {
    const { results } = await this.httpClient.get<ICharacter[]>(`${this.baseUrl}/${this.endpoint}`)

    return results.map((character) => new Character(character))
  }

  getCharacterDetails = (id: number): Promise<ICharacter> => {
    throw new Error('Method not implemented.')
  }
}
