import { ICharacterService } from '@/interfaces'

import { Domain } from '../interfaces'

export default class CharactersDomain implements Domain.ICharactersDomain {
  charactersService: ICharacterService

  constructor({ charactersService }: Domain.Params) {
    this.charactersService = charactersService
  }

  getCharacters = async (params: { page: number | null }) => {
    const { page } = params
    const { results, info } = await this.charactersService.getCharacters({ page })

    return { results, info }
  }

  getNextPageFromURL = (url: string) => {
    const urlObj = new URL(url)
    const params = new URLSearchParams(urlObj.search)

    return params.get('page') ? Number(params.get('page')) : null
  }
}
