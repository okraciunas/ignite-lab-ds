import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest';

import { SignIn } from '.'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'fulano@email.com')
    userEvent.type(canvas.getByPlaceholderText('********'), '12345678')
    userEvent.click(canvas.getByRole('button', { name: 'Entrar na plataforma' }))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado')).toBeInTheDocument()
    })
  }
}