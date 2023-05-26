import Head from 'next/head'
import { HomeViewModel } from '@/modules/home'

import { CharacterCard, Container, Grid, LinkButton, Loading, Row, Text, Title } from '@/components'

export default function HomePage(viewModel: HomeViewModel.IReturn) {
  const { characters = [], loading } = viewModel

  return (
    <main>
      <Loading active={loading} />

      <Head>
        <title>Rick and Morty List</title>
      </Head>

      <Container>
        <Container>
          <Title className="text-center">Rick and Morty</Title>
          <Text className="font-bold">Character List</Text>
        </Container>

        <Grid>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Grid>

        {!loading && (
          <Row className="justify-center mt-5">
            <LinkButton href="/characters" className="text-white">
              See all characters
            </LinkButton>
          </Row>
        )}
      </Container>
    </main>
  )
}
