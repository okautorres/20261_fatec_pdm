import React, { useEffect, useState } from 'react'
import EstacaoClimatica from './EstacaoClimatica'

function App() {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mostrar, setMostrar] = useState(false)

  const icones = {
    Primavera: 'cloud-sun',
    Verão: 'sun',
    Outono: 'sun-plant-wilt',
    Inverno: 'snowflake'
  }

  const obterEstacao = (dataAtual, latitude) => {
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21)
    const d2 = new Date(ano, 8, 23)
    const d3 = new Date(ano, 11, 22)
    const d4 = new Date(ano, 2, 21)
    const hemisferioSul = latitude < 0

    if (dataAtual >= d1 && dataAtual < d2)
      return hemisferioSul ? 'Inverno' : 'Verão'
    if (dataAtual >= d2 && dataAtual < d3)
      return hemisferioSul ? 'Primavera' : 'Outono'
    if (dataAtual >= d3 || dataAtual < d4)
      return hemisferioSul ? 'Verão' : 'Inverno'
    return hemisferioSul ? 'Outono' : 'Primavera'
  }

  const obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const lat = posicao.coords.latitude
        const lon = posicao.coords.longitude

        const dataAtual = new Date()
        const est = obterEstacao(dataAtual, lat)

        setLatitude(lat)
        setLongitude(lon)
        setEstacao(est)
        setIcone(icones[est])
      },
      (err) => {
        console.log(err)
        alert('Permita a localização para funcionar')
      }
    )
  }

  useEffect(() => {
    obterLocalizacao()
  }, [])

  return (
    <div className='container mt-2'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <EstacaoClimatica
            icone={icone}
            estacao={estacao}
            latitude={latitude}
            longitude={longitude}
            mostrar={mostrar}
            aoClicar={() => setMostrar(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default App