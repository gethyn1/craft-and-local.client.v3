import { Sizes, FontSizes, Colors } from '../enums'
import { theme as THEME, ThemeType } from './theme'

const getSpace = (space: Sizes, theme: ThemeType = THEME): number => theme.space[space]

const getFontSize = (fontSizes: FontSizes, theme: ThemeType = THEME): number[] => theme.fontSizes[fontSizes]

const getColor = (color: Colors, theme: ThemeType = THEME): string => theme.colors[color]

export {
  getSpace,
  getFontSize,
  getColor
}
