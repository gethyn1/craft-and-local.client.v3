import * as React from 'react'

const Search = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <form>
      <input onChange={handleChange} type="text" />
    </form>
  )
}

export {
  Search
}
