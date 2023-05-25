import Image from 'next/image'
import { HomeViewModel } from './interfaces'

export default function HomePage(viewModel: HomeViewModel.IReturn) {
  const { characters } = viewModel

  return (
    <main>
      <h1>Rick and Morty</h1>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Image src={character.image} alt={character.name} width={150} height={150} />
            <h2>{character.name}</h2>
            <p>{character.status}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
