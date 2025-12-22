import Trabajos_Cards from '../components/Trabajos_Cards'

const TRABAJOS = [
    { id: 1, nombre: "baranda1", categoria: "barandas", image: "/images/baranda1.png" },
    { id: 2, nombre: "baranda2", categoria: "barandas", image: "/images/baranda2.png" },
    { id: 3, nombre: "porton1", categoria: "portones", image: "/imagenes/porton1.jpg" },
    { id: 4, nombre: "porton2", categoria: "portones", image: "/imagenes/porton2.png" },
    { id: 5, nombre: "puerta1", categoria: "puertas", image: "/imagenes/puerta1.png" },
    { id: 6, nombre: "puerta2", categoria: "puertas", image: "/imagenes/puerta2.png" },
    { id: 7, nombre: "reja1", categoria: "rejas", image: "/imagenes/reja1.png" },
    { id: 8, nombre: "reja2", categoria: "rejas", image: "/imagenes/reja2.png" },
    { id: 9, nombre: "reja3", categoria: "rejas", image: "/imagenes/reja3.png" },
    { id: 10, nombre: "techo1", categoria: "techos", image: "/imagenes/techo1.png" },
    { id: 11, nombre: "techo2", categoria: "techos", image: "/imagenes/techo2.png" },
    { id: 12, nombre: "techo3", categoria: "techos", image: "/imagenes/techo3.png" },
    { id: 12, nombre: "ventana1", categoria: "ventanas", image: "/imagenes/ventana1.png" },

    
]

function Trabajos() {
  return (
    <div>
      <Trabajos_Cards trabajos={TRABAJOS} />
    </div>
  )
}

export default Trabajos