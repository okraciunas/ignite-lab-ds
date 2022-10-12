import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: "Label",
    fullWidth: false
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text'
    },
    fullWidth: {
      name: 'Largura 100%',
      control: 'boolean'
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}