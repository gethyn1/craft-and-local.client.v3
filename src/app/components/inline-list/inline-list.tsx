import * as React from 'react'
import styled from 'styled-components'
import { space, SpaceProps, color, ColorProps, fontSize, FontSizeProps } from 'styled-system'
import { Sizes, FontSizes, Colors } from '../enums'
import { getSpace, getFontSize, getColor } from '../theme'

interface InlineList<T> {
  items: T[],
  prop: keyof T,
  keyProp: keyof T,
  delimiter: string,
  size?: Sizes,
  color?: Colors,
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

const InlineList = <T extends any>({ items, prop, keyProp, delimiter, size = Sizes.SMALL, color, fontSize }: InlineList<T>) => (
  <List
    color={getColor(color)}
    fontSize={getFontSize(fontSize)}
  >
    {items.map(item => <ListItem marginLeft={getSpace(size)} delimiter={delimiter} key={item[keyProp]}>{item[prop]}</ListItem>)}
  </List>
)

export {
  InlineList
}
