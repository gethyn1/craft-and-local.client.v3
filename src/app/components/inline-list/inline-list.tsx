import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import { space, SpaceProps, color, ColorProps, fontSize, FontSizeProps } from 'styled-system'
import { Sizes, FontSizes } from '../enums'
import { getSizesForTheme, getFontSizesForTheme, getColorsForTheme } from '../get-sizes-for-theme'
import { ThemeType } from '../base'

interface InlineList<T> {
  items: T[],
  prop: keyof T,
  keyProp: keyof T,
  delimiter: string,
  size?: Sizes,
  theme: ThemeType,
  color?: string,
  fontSize?: FontSizes
}

type ListItemProps = {
  delimiter: string
}

const List = styled.ul<ColorProps & FontSizeProps>`
  margin-left: 0;
  margin-bottom: 0;
  ${color}
  ${fontSize}
`

const ListItem = styled.li<SpaceProps & ListItemProps>`
  list-style: none;
  display: inline-block;

  &:after {
    content: "${props => props.delimiter}";
  }

  &:last-child:after {
    display: none;
  }

  + * {
    ${space}
  }
`

const InlineList = <T extends any>({ items, prop, keyProp, delimiter, size = Sizes.SMALL, theme, color, fontSize }: InlineList<T>) => {
  const marginLeft = getSizesForTheme(theme)[size]
  const listFontSize = getFontSizesForTheme(theme)[fontSize]
  const listColor = getColorsForTheme(theme)[color]

  return (
    <List color={listColor} fontSize={listFontSize}>
      {items.map(item => <ListItem marginLeft={marginLeft} delimiter={delimiter} key={item[keyProp]}>{item[prop]}</ListItem>)}
    </List>
  )
}

const InlineListWithTheme = withTheme(InlineList)

export {
  InlineListWithTheme as InlineList
}
