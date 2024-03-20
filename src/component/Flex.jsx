import React from 'react'

const Flex = ({children, className, onClick}) => {
  return (
    <div className={`lg:flex ${className}`} onClick = {onClick}>{children}</div>
  )
}

export default Flex