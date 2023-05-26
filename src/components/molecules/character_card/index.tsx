import { BaseProps, ICharacter } from '@/interfaces'
import { Card, Column, Row, Image, Title } from '../../atoms'
import { InfoRow } from './info_row'

interface Props extends BaseProps {
  character: ICharacter
}

export function CharacterCard({ character }: Props) {
  const { image, name, status, species, gender, location } = character

  const badgeColor = status === 'Alive' ? 'bg-green-500' : 'bg-red-500'

  return (
    <Card className="bg-dark-gray-500 hover:scale-105 transition-all duration-300 cursor-pointer">
      <Row>
        <Image src={image} alt={name} width={150} height={150} />

        <Column className="p-2 max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[20rem]">
          <Title className="break-words text-left hover:text-orange-500">{name}</Title>

          <Row>
            <div className={`h-2 w-2 rounded-full self-center mr-1 ${badgeColor}`} />
            <span className="text-white text-sm sm:text-sm md:text-lg lg:text-xl">
              {status} - {species}
            </span>
          </Row>

          <InfoRow title="Gender" content={gender} />

          <InfoRow title="Last known location" content={location.name} />
        </Column>
      </Row>
    </Card>
  )
}
