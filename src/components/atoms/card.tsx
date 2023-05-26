import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {
  darkBg?: boolean
}

export function Card({ children, className = '', darkBg, ...rest }: Props) {
  const background = darkBg ? 'bg-dark-gray-500' : 'bg-white'

  return (
    <div
      className={`
        ${background} 
        shadow overflow-hidden rounded-lg 
        hover:scale-105 transition-all duration-300 cursor-pointer
        ${className}
      `}
      {...rest}
    >
      {children}
    </div>
  )
}
