import React, { Children } from 'react'

const ListItem = ({children, className}) => {
  return (
    <li className={`flex ${className}`}>
        {children}
    </li>
  )
}

export default ListItem