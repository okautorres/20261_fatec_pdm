import React from 'react'
import { useState } from 'react'

function App() {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  
  const icones = {
      'Primavera': 'cloud-sun',
      'Verão': 'sun',
      'Outono': 'canadian-maple-lea',
      'Inverno': 'snowflake'
    }
  const obterEstacao = (dataAtual, latitude) => {
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21)
    const d2 = new Date(ano, 8, 23)
    const d3 = new Date(ano, 11, 22)
    const d4 = new Date(ano, 2, 21)
    const estanoSul = latitude < 0

    if(dataAtual >= d1 && dataAtual < d2)
      return estanoSul ? 'Inverno' : 'Verão'
    if (dataAtual >= d2 && dataAtual < d3)
      return estanoSul ? 'Primavera' : 'Outono'
    if(dataAtual >= d3 || dataAtual < d4)
      return estanoSul ? 'Verão' : 'Inverno'
    return estanoSul ? 'Outono' : 'Primavera'
  }
  
  const obterLocalizacao = () => {
    
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
      const latitude = posicao.coords.latitude
      const longitude = posicao.coords.longitude
      }, 
      (err) => {
        console.log(err)
      }
    )

    const data = new Date()
    const estacao = obterEstacao(data, latitude)
    const icone = icones[estacao]

    setLatitude(latitude)
    setLongitude(longitude)
    setEstacao(estacao)
    setData(date.toLocaleDateString())
    setIcone(icone)
  }

  return (
      <div className='container mt-2'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>

                <div className='d-flex align-items-center'
                style={{height: '6rem'}}>
                  <i className={`fa-solid fa-3x fa-${icone}`}></i>
                    <p className="w-75 ms-3 text-center fs-1">
                      {estacao}
                    </p>
                </div>

              </div>
            </div>
            <p className='text-center'>
            {
              latitude ? 
              `Coordenadas: ${latitude},${longitude}` : 
              'Clique no botão para ver sua estação climática'
            }
            </p>
          </div>
          <button 
            onClick={() => obterLocalizacao()}
            className='btn btn-outline-primary w-100 mt-2'>
              Qual a minha estação?
          </button>
        </div>
      </div>
  )
}

export default App