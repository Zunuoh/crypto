import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const ComponentA = () => {
  const {count} = useContext(GlobalContext)
  return (
    <div style={{backgroundColor:"red"}}>
      Component A
      <p>count: {count}</p>
    </div>
  
  )
}

export default ComponentA