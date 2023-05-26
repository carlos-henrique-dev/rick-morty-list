import { create } from 'zustand'

import { ICharacter, ICharacterStore } from '@/interfaces'

export const useCharactersStore = create<ICharacterStore>((set) => ({
  characters: [],
  setCharacters: (characters: Array<ICharacter>) => set({ characters }),
}))
