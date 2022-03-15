import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'
import ComponentA from './ComponentA'

const MyCounter = () => {
   const { count, increaseCount, decreaseCount} = useContext(GlobalContext)
  return (
    <div>
        <h3>MyCounter</h3>
        <p>My count is : {count}</p>
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
        <ComponentA/>
    </div>
  )
}

export default MyCounter