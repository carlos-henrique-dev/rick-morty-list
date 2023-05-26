import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {}

export function Container({ children, className = '', ...rest }: Props) {
  return (
    <div className={`container mx-auto p-5 ${className}`} {...rest}>
      {children}
    </div>
  )
}
