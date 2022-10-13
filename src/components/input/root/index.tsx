import { ReactNode } from "react"

export interface InputRootProps {
  children?: ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return (
    <div className='flex item-center gap-3 py-4 px-3 outline-none rounded bg-gray-800 focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

InputRoot.displayName = 'Input.Root'