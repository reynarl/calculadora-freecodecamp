import React from 'react'
import LogoFreecodecamp from '../img/logo-freecodecamp.png'

const Logo = () => {
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img src={LogoFreecodecamp} className='freecodecamp-logo' alt='Logo freecodecamp' />
    </div>
  )
}

export default Logo