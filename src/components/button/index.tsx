import { ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string
  fullWidth?: boolean
}

export function Button({ children, className, fullWidth = false, ...props }: ButtonProps) {
  return (
    <button className={classnames('py-3 px-4 font-semibold text-sm text-black rounded bg-cyan-500 transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', { 'w-full': fullWidth }, className)} {...props}>
      {children}
    </button>  
  )
}