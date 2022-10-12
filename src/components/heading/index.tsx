import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot';
import classnames from 'classnames'

export interface HeadingProps {
  children?: string | ReactNode
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}
 
export function Heading({ children, size = 'md', asChild = false }: HeadingProps) {
  const Wrapper = asChild ? Slot : 'h2'

  return (
    <Wrapper
      className={classnames(
        "text-gray-100 font-bold font-sans",
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-xxl': size === 'lg'
        }
      )}
    >
      {children}
    </Wrapper>
  )
}