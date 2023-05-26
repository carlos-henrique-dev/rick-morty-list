import { HttpClient } from '@/infra'
import { CharacterService } from '@/services'
import { HomeDomain, useHomeViewModel } from '@/modules/home'

import HomePage from './page'
import { useCharactersStore } from '@/store/characters'

const httpClient = new HttpClient()
const charactersService = new CharacterService({ httpClient, baseUrl: process.env.NEXT_PUBLIC_API_URL || '' })
const homeDomain = new HomeDomain({ charactersService })

export default function HomeContainer() {
  const characterStore = useCharactersStore()
  const viewModel = useHomeViewModel({ domain: homeDomain, characterStore })

  return <HomePage {...viewModel} />
}
