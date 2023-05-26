import { HttpClient } from '@/infra'
import { CharacterService } from '@/services'
import { useHomeViewModel } from '@/modules/home'

import HomePage from './page'
import { useCharactersStore } from '@/store/characters'

const httpClient = new HttpClient()
const characterService = new CharacterService({ httpClient, baseUrl: process.env.NEXT_PUBLIC_API_URL || '' })

export default function HomeContainer() {
  const characterStore = useCharactersStore()
  const viewModel = useHomeViewModel({ characterService, characterStore })

  return <HomePage {...viewModel} />
}
