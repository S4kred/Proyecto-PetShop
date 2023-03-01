import { useState } from 'react'
import PetShop from './assets/logo.png'
import './App.scss'

function App() {

  return (
    <div className="App">
      <div>
        <a target="_blank">
          <img src={PetShop} className="logo" alt="PetShop logo" />
        </a>
      </div>
      <h1>PetShop</h1>
      <div className="button-container">
      <button className="button" style={{ marginRight: '20px' }}>Cliente</button>
      <button className="button">Vendedor</button>
      </div>
    </div>
  )
}

export default App
