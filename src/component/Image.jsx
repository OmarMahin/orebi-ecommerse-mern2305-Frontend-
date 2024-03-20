import React from 'react'

const Image = ({src,alt, className}) => {
  return (
    <img className={className} src={src} alt = {alt}></img>
  )
}

export default Image