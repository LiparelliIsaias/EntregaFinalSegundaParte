import Trabajos_Cards from '../../components/Trabajos_Cards'

const TRABAJOS = [
    { id: 1, nombre: "Protecciones para balcones", categoria: "barandas", image: "/images/baranda1.jpg" },
    { id: 2, nombre: "Protecciones para escaleras", categoria: "barandas", image: "/images/baranda2.jpg" },
    { id: 3, nombre: "Portones automaticos", categoria: "portones", image: "/images/porton1.jpg" },
    { id: 4, nombre: "Portones corredizos", categoria: "portones", image: "/images/porton2.jpg" },
    { id: 5, nombre: "Puertas principales", categoria: "puertas", image: "/images/puerta1.jpg" },
    { id: 6, nombre: "Puertas secundarias", categoria: "puertas", image: "/images/puerta2.jpg" },
    { id: 7, nombre: "Rejas decorativas", categoria: "rejas", image: "/images/reja1.jpg" },
    { id: 8, nombre: "Rejas de seguridad", categoria: "rejas", image: "/images/reja2.jpg" },
    { id: 9, nombre: "Rejas para ventanas", categoria: "rejas", image: "/images/reja3.jpg" },
    { id: 10, nombre: "Techos", categoria: "techos", image: "/images/techo1.jpg" },
    { id: 11, nombre: "Techos modernos", categoria: "techos", image: "/images/techo2.jpg" },
    { id: 12, nombre: "Techos clásicos", categoria: "techos", image: "/images/techo3.jpg" },
]

function Trabajos() {

  return (
    <div>
      <Trabajos_Cards trabajos={TRABAJOS} />
    </div>
  )
}

export default Trabajos