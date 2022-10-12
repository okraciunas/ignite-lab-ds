import classnames from 'classnames'

export interface TextProps {
  children?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Text({ children, size = 'md' }: TextProps) {
  return (
    <span
      className={classnames(
        "text-gray-100 font-sans",
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'
        }
      )}
    >
      {children}
    </span>
  )
}