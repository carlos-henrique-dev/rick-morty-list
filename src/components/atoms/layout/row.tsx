import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {}

export function Row({ children, className = '', ...rest }: Props) {
  return (
    <div className={`flex flex-row flex-wrap ${className}`} {...rest}>
      {children}
    </div>
  )
}
