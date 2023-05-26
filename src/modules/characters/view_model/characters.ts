import { useEffect, useState } from 'react'

import { CharactersViewModel } from '../interfaces'

export default function useCharactersViewModel(params: CharactersViewModel.IProps): CharactersViewModel.IReturn {
  const { characterService, characterStore } = params

  const [endOfList, setEndOfList] = useState(false)

  const { characters, pagination, loading, setCharacters, setNextPage, setLoading } = characterStore

  const getCharacters = async () => {
    let page = null
    if (characters.length) {
      page = pagination.next
    }

    const { results, info } = await characterService.getCharacters({ page })

    setCharacters(results)
    setNextPage(characterService.getNextPageFromURL(info.next))
  }

  useEffect(() => {
    if (!characters.length) {
      getCharacters()
    }
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNextPage = async () => {
    setLoading(true)
    const { results, info } = await characterService.getCharacters({ page: pagination.next })

    if (!info.next) {
      setEndOfList(true)
    }

    setNextPage(characterService.getNextPageFromURL(info.next))
    setCharacters([...characters, ...results])

    setLoading(false)
  }

  return {
    characters,
    loading,
    endOfList,
    getNextPage,
  }
}
