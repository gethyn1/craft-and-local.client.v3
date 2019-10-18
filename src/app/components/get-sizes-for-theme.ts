import { Sizes } from './enums'
import { ThemeType } from './base/theme'

// TODO move theme and ThemeType so it is easily imported
const getSizesForTheme = (theme: ThemeType) => ({
  [Sizes.X_SMALL]: theme.space.xsmall,
  [Sizes.SMALL]: theme.space.small,
  [Sizes.MEDIUM]: theme.space.medium,
  [Sizes.LARGE]: theme.space.large,
  [Sizes.X_LARGE]: theme.space.xlarge
})

export {
  getSizesForTheme
}
