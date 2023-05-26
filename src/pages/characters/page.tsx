import Head from 'next/head'
import { Container, Title, Loading, Grid, CharacterCard, Button, Row } from '@/components'
import { CharactersViewModel } from '@/modules/characters'

export default function CharactersPage(viewModel: CharactersViewModel.IReturn) {
  const { characters = [], loading, getNextPage, endOfList } = viewModel

  const handleGetNextPage = () => {
    getNextPage()
  }

  return (
    <main>
      <Loading active={loading} />

      <Head>
        <title>Characters</title>
      </Head>

      <Container>
        <Container>
          <Title className="text-center">Rick and Morty</Title>
        </Container>

        <Grid>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Grid>

        {!endOfList && (
          <Row className="justify-center mt-5">
            <Button onClick={handleGetNextPage} className="text-white">
              Load more
            </Button>
          </Row>
        )}
      </Container>
    </main>
  )
}
