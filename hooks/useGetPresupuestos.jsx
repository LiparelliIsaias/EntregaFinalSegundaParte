import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

function useGetPresupuestos() {
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calcularPresupuesto = async (tipo, metros2) => {
    setLoading(true);
    setError(null);

    try {
      // lógica distinta según el tipo
      const precioM2 = tipo === "Rejas" ? 20000 : 35000;
      const total = parseFloat(metros2) * precioM2;

      const res = await axios.post(`${API_URL}/${tipo}`, {
        metros2,
        precioM2,
        total,
      });

      setResultado(res.data);
    } catch (err) {
      console.error("Error al conectar con la API:", err);
      setError(err);
      setResultado(null);
    } finally {
      setLoading(false);
    }
  };

  return { resultado, loading, error, calcularPresupuesto };
}

export default useGetPresupuestos;
