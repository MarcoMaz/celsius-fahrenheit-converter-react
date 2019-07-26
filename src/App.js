import React, { useState, createContext } from 'react';
import './App.scss';
import Celsius from './components/Celsius'
import Fahrenheit from './components/Fahrenheit'

export const Temperature = createContext()

function GradConverter(){
  const [ grad, updateGrad ] = useState({
    cels: 0,
    fahr: 0
    })
  
  const toF = e => updateGrad({
    cels: e.target.value,
    fahr: ((e.target.value * 9 / 5) + 32).toFixed(2)
    })
  
  const toC = e => updateGrad({
    cels: ((e.target.value - 32) * 5 / 9).toFixed(2),
    fahr: e.target.value
  })
  
  return(
    <Temperature.Provider value={{cels: grad.cels, fahr: grad.fahr, toF, toC}}>
      <div id="container">
        <h1>Celsius/Fahrenheit Converter</h1>
        <Celsius/>
        <Fahrenheit/>
      </div>
    </Temperature.Provider>
    )
}

export default GradConverter;