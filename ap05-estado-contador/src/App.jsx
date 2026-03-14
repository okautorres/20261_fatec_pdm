import React, {useState} from 'react'

export const App = () => {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <h1>Contador: </h1>
      <div>
        <button 
        onClick={() => setContador(contador + 1)}
        style={{marginRight: 8}}>
          Incrementar
        </button>
        <button 
        onClick={() => setContador(contador - 1)}
        style={{marginRight: 8}}>
          Decrementar
        </button>
        <button
        onClick={() => setContador(0)}
        >
          Reiniciar
        </button>
      </div>
    </div>
  )
}
