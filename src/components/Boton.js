import React from 'react'
import '../css/Boton.css'

const Boton = (props) => {

  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return (
    //Eliminamos (con trimEnd ) el espacio en blanco al final de cuando no se asigna la clase.
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Boton