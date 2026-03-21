import React from 'react'
import { useState } from 'react'

import FormularioPersonagem from './FormularioPersonagem'
import CartaoPersonagem from './CartaoPersonagem'
import './App.css'

export const App = () => {
  const [nome, setNome] = useState('');
  const [classe, setClasse] = useState('');
  const [nivel, setNivel] = useState(0);

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4 titulo'>Criador de Personagem RPG</h1>
      <FormularioPersonagem 
      nome={nome} setNome={setNome} classe={classe} setClasse={setClasse} nivel={nivel} setNivel={setNivel}/>
      <CartaoPersonagem
      nome={nome} classe={classe} nivel={nivel}
      />
    </div>
  )
}

export default App
