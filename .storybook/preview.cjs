import { themes } from '@storybook/theming'
import { initialize as mswinitialize, mswDecorator } from 'msw-storybook-addon';

import './../src/styles/global.css'

mswinitialize({ onUnhandledRequest: 'bypass' });

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  }
}