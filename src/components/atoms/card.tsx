import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {}

export function Card({ children, className = '', ...rest }: Props) {
  return (
    <div className={`bg-white shadow overflow-hidden rounded-lg ${className}`} {...rest}>
      {children}
    </div>
  )
}
