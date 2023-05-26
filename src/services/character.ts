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

  getCharacters = async (params: Record<string, any>) => {
    const url = `${this.baseUrl}/${this.endpoint}?${new URLSearchParams(params)}`

    const { results, info } = await this.httpClient.get<ICharacter[]>(url)

    return {
      results: results.map((character) => new Character(character)),
      info,
    }
  }

  getCharacterDetails = (id: number) => {
    throw new Error('Method not implemented.')
  }

  getNextPageFromURL = (url: string) => {
    const urlObj = new URL(url)
    const params = new URLSearchParams(urlObj.search)

    return params.get('page') ? Number(params.get('page')) : null
  }
}
