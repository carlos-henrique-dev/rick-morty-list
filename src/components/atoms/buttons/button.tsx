import { BaseProps } from '@/interfaces'

interface Props extends BaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: Props) {
  const { children, className = '', disabled, onClick, ...rest } = props

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    onClick?.(event)
  }

  return (
    <button className={`text-bold text-xl px-5 py-2 rounded-lg bg-orange-500 ${className}`} onClick={handleClick} {...rest}>
      {children}
    </button>
  )
}
