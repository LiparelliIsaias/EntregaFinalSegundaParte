import React from 'react'

function Trabajos_Cards({trabajos}) {
  
  return (
     <div className='trabajosContainer' >
      {trabajos.map((trabajo) => (
        <div className='trabajosCard' key={trabajo.id} >
            <h3> {trabajo.nombre} </h3>
            <img src={trabajo.image}/>
            <p> {trabajo.categoria} </p>
        </div>
      ) )}
    </div>
  )
}

export default Trabajos_Cards