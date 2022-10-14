import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '.'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Text label',
    size: 'md'
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = { 
  args: {
    size: 'sm'
  },
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  },
}

export const CustomWrapper: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (<p>Label</p>)
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