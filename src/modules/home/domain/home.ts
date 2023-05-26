import { ICharacterService } from '@/interfaces'

import { Domain } from '../interfaces'

export default class HomeDomain implements Domain.IHomeDomain {
  charactersService: ICharacterService

  constructor({ charactersService }: Domain.Params) {
    this.charactersService = charactersService
  }

  getCharacters = async () => {
    const { results, info } = await this.charactersService.getCharacters({ page: 1 })
    return { results, info }
  }

  getNextPageFromURL = (url: string) => {
    const urlObj = new URL(url)
    const params = new URLSearchParams(urlObj.search)

    return params.get('page') ? Number(params.get('page')) : null
  }
}
