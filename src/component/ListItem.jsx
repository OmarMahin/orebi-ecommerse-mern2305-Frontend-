import React, { Children } from 'react'

const ListItem = ({children, className}) => {
  return (
    <li className={`${className}`}>
        {children}
    </li>
  )
}

export default ListItem