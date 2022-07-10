import React from 'react'
import '../css/BotonClear.css'

const BotonClear = (props) => {
  return (
    <div className='boton-clear'>
      {props.children}
    </div>
  )
}

export default BotonClear