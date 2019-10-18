const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: {
    small: 4,
    medium: 8,
    large: 16,
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 48],
  fontFamily: '"Karla", sans-serif',
  colors: {
    primary: '#007ce0'
  },
  layout: {
    container: {
      maxWidth: 1280
    }
  }
}

// Font sizes aliases based on https://typecast.com/blog/a-more-modern-scale-for-web-typography

// @ts-ignore: Typescript does not support styled system aliases
theme.fontSizes.headingLevel1 = [32, 40, 48]
// @ts-ignore: Typescript does not support styled system aliases
theme.fontSizes.headingLevel2 = [26, 32, 36]
// @ts-ignore: Typescript does not support styled system aliases
theme.fontSizes.headingLevel3 = [22, 24, 28]
// @ts-ignore: Typescript does not support styled system aliases
theme.fontSizes.headingLevel4 = [18]
// @ts-ignore: Typescript does not support styled system aliases
theme.fontSizes.body = [16]

type ThemeType = typeof theme

export {
  theme,
  ThemeType
}
