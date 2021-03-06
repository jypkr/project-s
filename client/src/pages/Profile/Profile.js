import Navbar from '../../components/NavBar/Navbar'
import PostForm from '../../components/PostFrom'
import ProfileSettingForm from '../../components/ProfileSettingForm'
import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_USER } from '../../utils/queries.js'
import { useStoreContext } from '../../utils/GlobalState.js'
import { GET_USER } from '../../utils/action.js'
import AuthService from '../../utils/auth.js'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';



const Profile = () => {

 


  let { _id } = AuthService.getUser()
  const [state, dispatch] = useStoreContext()
  const { loading, data, error } = useQuery(QUERY_USER, {
    variables: {
      _id: _id
    }
  })
  if (error) {
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

  return (
    <>
      
      <Box display="flex" flexDirection="row" >
        <Box flexGrow={1}>
          <Navbar></Navbar>
        </Box>
        <Box display="flex" flexDirection="row" flexGrow={1}>
          <Box
            display="flex"
            flexDirection="column"
            marginLeft='1rem'
            flexGrow={0}
          >



            <div className='pgContent'>

            <h1>Profile</h1>
            <h2>{state.user.name}</h2>

            <ProfileSettingForm
              state={state}
              dispatch={dispatch}
              ></ProfileSettingForm>
              </div>



          </Box>
        </Box>
       
      </Box>

      {/* <PostForm></PostForm> */}

      
    </>

  )


}

export default Profile