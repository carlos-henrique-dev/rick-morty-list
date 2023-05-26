import { useEffect, useState } from 'react'
import { ICharacter } from '@/interfaces'

import { HomeViewModel } from '../interfaces'

export default function useHomeViewModel(params: HomeViewModel.IProps): HomeViewModel.IReturn {
  const { domain } = params

  const [characters, setCharacters] = useState<ICharacter[]>([])

  const getCharacters = async () => {
    const characters = await domain.getCharacters()
    setCharacters(characters)
  }

  useEffect(() => {
    getCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    characters,
  }
}
