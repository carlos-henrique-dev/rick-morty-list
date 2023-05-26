import Link from 'next/link'

import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {
  href: string
}

export function LinkButton(props: Props) {
  const { children, href, className = '', ...rest } = props

  return (
    <Link href={href}>
      <button className={`text-bold text-xl px-5 py-2 rounded-lg bg-orange-500 ${className}`} {...rest}>
        {children}
      </button>
    </Link>
  )
}
