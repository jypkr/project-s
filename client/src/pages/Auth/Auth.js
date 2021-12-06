import { useState } from 'react'
import Login from '../../components/Login'
import Register from '../../components/Register'

const Auth = () => {
  const [register, setRegister]= useState(false)

  const setParentState= ()=>{
    setRegister(!register)
  }
  return (
    <>
      {!register ? <Login setParentState={setParentState}></Login> : <Register setParentState={setParentState}></Register>}
     
    </>
  )
}

export default Auth