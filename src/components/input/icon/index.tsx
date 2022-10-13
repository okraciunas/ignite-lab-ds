import { ReactNode } from "react"

export interface InputIconProps {
  children?: ReactNode
}

export function InputIcon({ children }: InputIconProps) {
  return <span className="w-6 h-6 text-gray-400">{children}</span>
}

InputIcon.displayName = 'Input.Icon'