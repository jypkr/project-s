import Navbar from '../../components/NavBar/Navbar'
import PostForm from '../../components/PostFrom'
import User from '../../components/User'
import ProfileSettingForm from '../../components/ProfileSettingForm'
import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_USERS } from '../../utils/queries.js'
import { useStoreContext } from '../../utils/GlobalState.js'


const Profile = () => {

 
  const [state, dispatch] = useStoreContext()
  const { loading, data } = useQuery(QUERY_USERS)


  useEffect(() => {

    if (data) {
      dispatch({
        type: 'GET_USERS',
        users: data.users
      })
      
    }

  }, [data])

  return (
    <>
     
      <User></User>
      <ProfileSettingForm
      state={state}
      dispatch={dispatch}
      ></ProfileSettingForm>

      {/* <PostForm></PostForm> */}

      <Navbar></Navbar>
    </>

  )


}

export default Profile