import React from 'react'

function Trabajos_Cards({trabajos}) {
  
  return (
     <div className='trabajosContainer' >
      {trabajos.map((trabajo) => (
        <div className='trabajosCard' key={trabajos.id} >
            <h3> {trabajo.nombre} </h3>
            <img src={trabajo.image} /*alt="computadora"*/ />
            <p> {trabajo.categoria} </p>
        </div>
      ) )}
    </div>
  )
}

export default Trabajos_Cards