import React from 'react'

const Link = ({children, className, href}) => {
  return (
    <a className={`flex ${className}`} href ={href ? href : '#'}>{children}</a>
  )
}

export default Link