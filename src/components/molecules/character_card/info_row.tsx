import { Row, Column } from '@/components/atoms'

interface Props {
  title: string
  content: string
}

export function InfoRow({ title, content }: Props) {
  return (
    <Row className='mt-1' >
      <Column>
        <span className="text-sm sm:text-sm md:text-lg lg:text-xl text-gray-400 ">{title}:</span>
        <span className="text-sm sm:text-sm md:text-lg lg:text-xl text-white break-words hover:text-orange-500">{content}</span>
      </Column>
    </Row>
  )
}
