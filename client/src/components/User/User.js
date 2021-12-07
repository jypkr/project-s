import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_USER } from '../../utils/queries.js'
import { useStoreContext } from '../../utils/GlobalState.js'
import { GET_USER } from '../../utils/action.js'

const User = () =>{

let _id = localStorage.getItem('userId')
console.log(_id)
  const [state, dispatch] = useStoreContext()
  const { loading, data, error } = useQuery(QUERY_USER, {
    variables: {
      _id:_id
    }
  })
if(error){
  console.log(error)
}
  useEffect(() => {

    if (data) {
      console.log(data)
      dispatch({
        type: 'GET_USER',
        user: data.user
      })

    }

  }, [data])

 

  return  (

    <>
      <h1>The Profile Page</h1>
      <h2>Name: {state.user.name}</h2>
      <h2>email: {state.user.email}</h2>
      <h2>profile: {}</h2>
    
    </>
  )
}

export default User