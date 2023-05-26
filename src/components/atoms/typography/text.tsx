import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {}

export function Text({ children, className = '', ...rest }: Props) {
  return (
    <p className={`text-white text-center ${className}`} {...rest}>
      {children}
    </p>
  )
}
