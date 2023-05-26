import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {}

export function Column({ children, className = '', ...rest }: Props) {
  return (
    <div className={`flex flex-col flex-wrap ${className}`} {...rest}>
      {children}
    </div>
  )
}
