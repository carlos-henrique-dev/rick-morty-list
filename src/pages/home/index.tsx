import { HttpClient } from '@/infra'
import { CharacterService } from '@/services'
import { HomeDomain } from './domain'

import { useHomeViewModel } from './view_model'
import HomePage from './page'

const httpClient = new HttpClient()
const charactersService = new CharacterService({ httpClient, baseUrl: process.env.NEXT_PUBLIC_API_URL || '' })
const homeDomain = new HomeDomain({ charactersService })

export default function HomeContainer() {
  const viewModel = useHomeViewModel({ domain: homeDomain })
  return <HomePage {...viewModel} />
}
