import { HttpClient } from '@/infra'
import { CharacterService } from '@/services'
import { useCharactersViewModel } from '@/modules/characters'

import CharactersPage from './page'
import { useCharactersStore } from '@/store/characters'

const httpClient = new HttpClient()
const characterService = new CharacterService({ httpClient, baseUrl: process.env.NEXT_PUBLIC_API_URL || '' })

export default function CharactersContainer() {
  const characterStore = useCharactersStore()
  const viewModel = useCharactersViewModel({ characterService, characterStore })

  return <CharactersPage {...viewModel} />
}
