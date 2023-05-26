import NextImage from 'next/image'

import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {
  src: string
  alt: string
  width: number
  height: number
}

export function Image({ src, alt, width, height, ...rest }: Props) {
  return <NextImage src={src} alt={alt} width={width} height={height} {...rest} />
}
