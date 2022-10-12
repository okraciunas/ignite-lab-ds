import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot';
import classnames from 'classnames'

export interface TextProps {
  children?: string | ReactNode
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export function Text({ children, size = 'md', asChild = false }: TextProps) {
  const Wrapper = asChild ? Slot : 'span'

  return (
    <Wrapper
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
    </Wrapper>
  )
}