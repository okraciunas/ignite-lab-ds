import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading label',
    size: 'md'
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = { 
  args: {
    size: 'sm'
  },
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  },
}

export const CustomWrapper: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (<h1>Label</h1>)
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}