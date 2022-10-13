import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { Input } from '.'
import { InputFieldProps } from './field'
import { InputIconProps } from './icon'

export default {
  title: 'Components/Input',
  component: Input.Field,
  subcomponents: {
    Field: Input.Field,
    Icon: Input.Icon,
    Root: Input.Root,
  },
} as Meta<InputFieldProps>

export const Default: StoryObj<InputFieldProps> = {
  args: {
    placeholder: 'Placeholder'
  },
  decorators: [(Story) => (
    <Input.Root>
      <Story />
    </Input.Root>
  )]
}

export const WithIcon: StoryObj<InputIconProps> = {
  decorators: [(Story) => (
    <Input.Root>
      <Input.Icon>
        <Envelope size={24}/>
      </Input.Icon>
      <Story args={{ placeholder: "Placeholder com ícone"}} />
    </Input.Root>
  )]
}