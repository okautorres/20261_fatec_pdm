import {useEffect, useState} from 'react'

const App = () => {
  const [texto, setTexto] = useState('')
  const[contador, setContador] = useState(0)

  useEffect(() => {
    console.log('Função de efeito colateral executou sem vetor')
  })

  useEffect(() => {
    console.log('Função de efeito colateral executou com vetor vazio')
  }, [])

  useEffect(() => {
    console.log('Função de efeito colateral executou Dependência: texto')
  }, [texto])

    useEffect(() => {
    console.log('Função de efeito colateral executou. Dependência: contador')
  }, [contador])

  return (
    <div style={{padding: 20, borderColor: 'black', borderWidth: 1, borderStyle: 'solid', borderRadius: 8}}>
      <h2>Efeitos colaterais</h2>
      <div>
      <input type="text" 
      style={{padding: 8}} 
      placeholder='Digite algo' 
      value={texto}
      onChange={(e) => setTexto(e.target.value)} 
      />  
      </div>
      <div style={{marginTop: 12}}>
        <button
        onClick={() => setContador(contador + 1)}>
          Contador: {contador}
        </button>
      </div>
    </div>
  )
}

export default App