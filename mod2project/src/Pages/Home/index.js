import React from 'react'
import { useState } from 'react'
import { Routes } from 'react-router-dom'

const Home = (props) => {
    console.log(stocksArray)
    const stocksJSX = stocksArray.map((stock)=> {
      return (<div>{ stock.symbol }</div>)
    } )
  return (
    <div>
      {stocksJSX}  
    </div>
  )
}

export default Home