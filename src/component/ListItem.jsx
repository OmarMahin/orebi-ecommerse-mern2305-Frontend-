import React, { Children } from 'react'

const ListItem = ({children, className, onClick, id}) => {
  return (
    <li className={`flex ${className}`}  onClick = {onClick} id = {id}>
        {children}
    </li>
  )
}

export default ListItem