import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps, color, ColorProps, fontSize, FontSizeProps } from 'styled-system'
import { Sizes, FontSizes, Colors } from '../enums'
import { getSpace, getFontSize, getColor } from '../theme'

interface BareList<T> {
  items: T[],
  prop?: keyof T,
  keyProp: keyof T,
  size?: Sizes,
  color?: Colors,
  fontSize?: FontSizes,
  renderItem?: (item: T) => React.ReactNode
}

const List = styled.ul<ColorProps & FontSizeProps>`
  margin-left: 0;
  margin-bottom: 0;
  ${color}
  ${fontSize}
`

const ListItem = styled.li<SpaceProps>`
  list-style: none;
  ${space}

  &:last-child {
    margin-bottom: 0;
  }
`

// TODO reuse base list component across inline and bare lists
const BareList = <T extends any>({ items, prop, keyProp, size = Sizes.SMALL, color, fontSize, renderItem }: BareList<T>) => (
  <List
    color={getColor(color)}
    fontSize={getFontSize(fontSize)}
  >
    {items.map(item =>
      <ListItem marginBottom={getSpace(size)} key={item[keyProp]}>
        {prop ? item[prop] : renderItem(item)}
      </ListItem>)}
  </List>
)

export {
  BareList
}
