import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {}

export function Title({ children, className = '', ...rest }: Props) {
  return (
    <h1 className={`text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white break-words ${className}`} {...rest}>
      {children}
    </h1>
  )
}
