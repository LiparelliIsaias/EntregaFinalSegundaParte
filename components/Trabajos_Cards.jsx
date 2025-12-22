import React from 'react'

function Trabajos_Cards({TRABAJOS}) {
  return (
     <div className='trabajosContainer' >
      {products.map((TRABAJOS) => (
        <div className='trabajosCard' key={TRABAJOS.id} >
            <h3> {TRABAJOS.nombre} </h3>
            <img src={TRABAJOS.image} /*alt="computadora"*/ />
            <p> {TRABAJOS.categoria} </p>
        </div>
      ) )}
    </div>
  )
}

export default Trabajos_Cards