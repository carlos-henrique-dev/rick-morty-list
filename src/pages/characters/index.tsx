import { HttpClient } from '@/infra'
import { CharacterService } from '@/services'
import { CharactersDomain, useCharactersViewModel } from '@/modules/characters'

import CharactersPage from './page'
import { useCharactersStore } from '@/store/characters'

const httpClient = new HttpClient()
const charactersService = new CharacterService({ httpClient, baseUrl: process.env.NEXT_PUBLIC_API_URL || '' })
const homeDomain = new CharactersDomain({ charactersService })

export default function CharactersContainer() {
  const characterStore = useCharactersStore()
  const viewModel = useCharactersViewModel({ domain: homeDomain, characterStore })

  return <CharactersPage {...viewModel} />
}
