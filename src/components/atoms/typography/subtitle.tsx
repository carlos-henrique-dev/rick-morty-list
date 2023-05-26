import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {}

export function Subtitle({ children, className = '', ...rest }: Props) {
  return (
    <h2 className={`text-2xl font-bold text-white text-center ${className}`} {...rest}>
      {children}
    </h2>
  )
}
