import { Sizes, FontSizes, Colors } from './enums'
import { ThemeType } from './base/theme'

// TODO move theme and ThemeType so it is easily imported
const getSizesForTheme = (theme: ThemeType) => ({
  [Sizes.X_SMALL]: theme.space.xsmall,
  [Sizes.SMALL]: theme.space.small,
  [Sizes.MEDIUM]: theme.space.medium,
  [Sizes.LARGE]: theme.space.large,
  [Sizes.X_LARGE]: theme.space.xlarge
})

// TODO remove these @ts-ignore statements
const getFontSizesForTheme = (theme: ThemeType) => ({
  // @ts-ignore: Typescript does not support styled system aliases
  [FontSizes.LEVEL_1]: theme.fontSizes.headingLevel1,
  // @ts-ignore: Typescript does not support styled system aliases
  [FontSizes.LEVEL_2]: theme.fontSizes.headingLevel2,
  // @ts-ignore: Typescript does not support styled system aliases
  [FontSizes.LEVEL_3]: theme.fontSizes.headingLevel3,
  // @ts-ignore: Typescript does not support styled system aliases
  [FontSizes.LEVEL_4]: theme.fontSizes.headingLevel4,
  // @ts-ignore: Typescript does not support styled system aliases
  [FontSizes.BODY]: theme.fontSizes.body,
  // @ts-ignore: Typescript does not support styled system aliases
  [FontSizes.SMALL]: theme.fontSizes.small
})

const getColorsForTheme = (theme: ThemeType) => ({
  [Colors.PRIMARY]: theme.colors.primary,
  [Colors.DARK_GREY]: theme.colors.darkGrey,
  [Colors.LIGHT_GREY]: theme.colors.lightGrey
})

export {
  getSizesForTheme,
  getFontSizesForTheme,
  getColorsForTheme
}
