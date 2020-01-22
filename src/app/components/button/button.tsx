import * as React from 'react'

type Props = {
  text: String,
  onClick: () => void
}

const Button = ({text, onClick}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick()
  }

  return <button onClick={handleClick}>{text}</button>
}

export {
  Button
}
