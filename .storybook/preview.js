import {ThemeProvider} from "styled-components";
import {theme} from "../src/styles/theme";
import {GlobalStyles} from "../src/styles/global-styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default : 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.whiteColor

      },
      {
        name: 'dark',
        value: theme.colors.primaryColor
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
