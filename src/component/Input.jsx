import React from 'react'

const Input = ({placeholder, className}) => {
  return (
    <input placeholder={placeholder} className = {className} type = 'text'></input>
  )
}

export default Input