import { BaseProps } from '@/interfaces'

interface Props extends BaseProps {
  active: boolean
}

export function Loading({ active }: Props) {
  if (!active) return null

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-white rounded-full ml-1 animate-bounce200"></div>
        <div className="w-2 h-2 bg-white rounded-full ml-1 animate-bounce400"></div>
      </div>
      <div className="text-xl font-semibold tracking-wide text-white">Loading...</div>
    </div>
  )
}
