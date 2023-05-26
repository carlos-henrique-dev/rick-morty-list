import { create } from 'zustand'

import { ICharacter, ICharacterStore } from '@/interfaces'

export const useCharactersStore = create<ICharacterStore>((set) => ({
  characters: [],
  loading: true,
  pagination: {
    next: null,
  },
  setCharacters: (characters: Array<ICharacter>) => set({ characters }),
  setNextPage: (next: number | null) => set({ pagination: { next } }),
  setLoading: (loading: boolean) => set({ loading }),
}))
