import { useEffect, useState } from 'react'

import { HomeViewModel } from '../interfaces'

export default function useHomeViewModel(params: HomeViewModel.IProps): HomeViewModel.IReturn {
  const { characterService, characterStore } = params

  const [loading, setLoading] = useState(true)
  const { characters, setCharacters, setNextPage } = characterStore

  const getCharacters = async () => {
    const { results, info } = await characterService.getCharacters({})

    setCharacters(results)
    setNextPage(characterService.getNextPageFromURL(info.next))
  }

  useEffect(() => {
    getCharacters()
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const firstThreeCharacters = characters.slice(0, 3)

  return {
    characters: firstThreeCharacters,
    loading,
  }
}
