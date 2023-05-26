import { useEffect, useState } from 'react'

import { CharactersViewModel } from '../interfaces'

export default function useCharactersViewModel(params: CharactersViewModel.IProps): CharactersViewModel.IReturn {
  const { domain, characterStore } = params

  const [loading, setLoading] = useState(true)
  const [endOfList, setEndOfList] = useState(false)

  const { characters, setCharacters } = characterStore

  const getCharacters = async () => {
    const characters = await domain.getCharacters()

    setCharacters(characters)
    setLoading(false)
  }

  useEffect(() => {
    if (!characters.length) {
      getCharacters()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNextPage = async () => {
    const newList = await domain.getCharacters()

    if (domain.currentPage > domain.maxPages) {
      setEndOfList(true)
    }

    setCharacters([...characters, ...newList])
  }

  return {
    characters,
    loading,
    endOfList,
    getNextPage,
  }
}
