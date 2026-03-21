import React, { useEffect, useState } from "react";

const EstacaoClimatica = ({
  icone,
  estacao,
  latitude,
  longitude,
  mostrar,
  aoClicar
}) => {

  const [hora, setHora] = useState('')

  useEffect(() => {
    if (!mostrar) return

    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [mostrar])

  const dadosCarregados = latitude && longitude && estacao && icone

  return (
    <div className="card">
      <div className="card-body">

        <div className="d-flex align-items-center" style={{ height: "6rem" }}>
          {mostrar && dadosCarregados && (
            <i className={`fa-solid fa-3x fa-${icone}`}></i>
          )}

          <p className="w-75 ms-3 text-center fs-1">
            {mostrar && dadosCarregados ? estacao : ''}
          </p>
        </div>

        <p className='text-center'>
          {
            !mostrar
              ? 'Clique no botão para ver sua estação climática'
              : !dadosCarregados
                ? 'Carregando localização...'
                : `Coordenadas: ${latitude}, ${longitude}. Hora: ${hora}`
          }
        </p>

      </div>

      <button
        onClick={aoClicar}
        className='btn btn-outline-primary w-100 mt-2'>
        Qual a minha estação?
      </button>
    </div>
  );
};

export default EstacaoClimatica;