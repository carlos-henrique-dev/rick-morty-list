import { useEffect, useState } from 'react'

import { CharactersViewModel } from '../interfaces'

export default function useCharactersViewModel(params: CharactersViewModel.IProps): CharactersViewModel.IReturn {
  const { domain, characterStore } = params

  const [endOfList, setEndOfList] = useState(false)

  const { characters, pagination, loading, setCharacters, setNextPage, setLoading } = characterStore

  const getCharacters = async () => {
    let page = null
    if (characters.length) {
      page = pagination.next
    }

    const { results, info } = await domain.getCharacters({ page })

    setCharacters(results)
    setNextPage(domain.getNextPageFromURL(info.next))
  }

  useEffect(() => {
    console.log({ pagination, loading, characters })
    if (!characters.length) {
      getCharacters()
    }
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNextPage = async () => {
    const { results, info } = await domain.getCharacters({ page: pagination.next })

    if (!info.next) {
      setEndOfList(true)
    }

    setNextPage(domain.getNextPageFromURL(info.next))
    setCharacters([...characters, ...results])
  }

  return {
    characters,
    loading,
    endOfList,
    getNextPage,
  }
}
