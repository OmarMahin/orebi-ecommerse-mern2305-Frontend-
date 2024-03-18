import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`lg:flex ${className}`}>{children}</div>
  )
}

export default Flex