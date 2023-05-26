import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {}

export function Grid({ children, className = '', ...rest }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ${className}`} {...rest}>
      {children}
    </div>
  )
}
