import Head from 'next/head'
import { HomeViewModel } from '@/modules/home'

import { CharacterCard, Container, Grid, Loading, Text, Title } from '@/components'

export default function HomePage(viewModel: HomeViewModel.IReturn) {
  const { characters = [], loading } = viewModel

  return (
    <main>
      <Head>
        <title>Rick and Morty List</title>
      </Head>

      <Container>
        <Container>
          <Title className="text-center">Rick and Morty</Title>
          <Text className="font-bold">Character List</Text>
        </Container>

        <Loading active={loading} />

        <Grid>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Grid>
      </Container>
    </main>
  )
}
