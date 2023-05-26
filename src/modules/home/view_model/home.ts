import { useEffect, useState } from 'react'

import { HomeViewModel } from '../interfaces'

export default function useHomeViewModel(params: HomeViewModel.IProps): HomeViewModel.IReturn {
  const { domain, characterStore } = params

  const [loading, setLoading] = useState(true)
  const { characters, setCharacters } = characterStore

  const getCharacters = async () => {
    const characters = await domain.getCharacters()

    setCharacters(characters)
    setLoading(false)
  }

  useEffect(() => {
    getCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const firstThreeCharacters = characters.slice(0, 3)

  return {
    characters: firstThreeCharacters,
    loading,
  }
}
