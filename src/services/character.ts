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

  getCharacters = async ({ page }: { page: number }) => {
    const { results, info } = await this.httpClient.get<ICharacter[]>(`${this.baseUrl}/${this.endpoint}`, { page })

    return {
      results: results.map((character) => new Character(character)),
      info,
    }
  }

  getCharacterDetails = (id: number) => {
    throw new Error('Method not implemented.')
  }
}
