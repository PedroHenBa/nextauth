export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    darkColor: '000000ff',
    purpleColor: '5a1780ff',
    greenColor: 'green',
    yellowColor: 'yellow',
    whiteColor: '#FFFFFF',
    mediumGray: '#DDDDDD',
  },
  fonts: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      big: '3.2rem',
      xbig: '4.0rem',
      xxbig: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    mtLarge: '(min-width: 800px)',
  },
  spacing: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    big: '3.2rem',
    xbig: '4.0rem',
    xxbig: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
