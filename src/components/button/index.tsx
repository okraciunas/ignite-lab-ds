import classnames from 'classnames'

export interface ButtonProps {
  children?: string
  fullWidth?: boolean
}

export function Button({ children, fullWidth = false }: ButtonProps) {
  return (
    <button className={classnames(`
      py-4 px-3
      font-semibold text-sm text-black
      rounded bg-cyan-500
      transition-colors
      hover:bg-cyan-300
      focus:ring-2 ring-white`,
      { 'w-full': fullWidth }
    )}>
      {children}
    </button>  
  )
}