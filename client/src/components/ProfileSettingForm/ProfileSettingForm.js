import './ProfileSettingForm.css'
import { useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState.js'
import { QUERY_USERS } from '../../utils/queries.js'
import { UPDATE_PROFILE } from '../../utils/mutations'
import TextField from '@mui/material/TextField'
import { TramOutlined } from '@mui/icons-material'



const ProfileSettingForm = ({state,dispatch}) => {
  
  const [updateProfile] = useMutation(UPDATE_PROFILE)
  
  


  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        dispatch({
          type: 'UPDATE_NAME',
          name: target.value
        })
        break
      case 'email':
        dispatch({
          type: 'UPDATE_EMAIL',
          email: target.value
        })
        break
      case 'bio':
        dispatch({
          type: 'UPDATE_BIO',
          bio: target.value
        })
        break
      case 'profileImage':
        dispatch({
          type: 'UPDATE_PROFILEIMAGE',
          profileImage: target.value
        })
        break
      case 'background':
        dispatch({
          type: 'UPDATE_BACKGROUND',
          background: target.value
        })
        break
      default:
        break
    }
  }




  const handleChangeProfile = async event => {
    event.preventDefault()
    
    const user = {
      name: state.name,
      email: state.email,
      bio: state.bio,
      profileImage: state.profileImage,
      background: state.background

    }

    try {
      const { data } = await updateProfile({
        variables: user
      })
      dispatch({
        type: 'UPDATE_PROFILE',
        user
      })

      

    } catch (err) {
      console.error(err)
      
    }
  }

  return (
    <>
      {/* <TextField
        id="outlined-textarea"
        label="name"
        placeholder="name"
        value={state.name}
        name='name'
        onChange={handleInputChange}

        multiline
      />
      <TextField
        id="outlined-textarea"
        label="email"
        placeholder="email"
        value={state.email}
        name='email'
        onChange={handleInputChange}

        multiline
      /> */}
      <TextField
        id="outlined-textarea"
        label="bio"
        placeholder="bio"
        value={state.bio}
        name='bio'
        onChange={handleInputChange}

        multiline
      />
      {/* <TextField
        id="outlined-textarea"
        label="profileImage"
        placeholder="profileImage"
        value={state.profileImage}
        name='profileImage'
        onChange={handleInputChange}
        multiline
      />
      <TextField
        id="outlined-textarea"
        label="background"
        placeholder="background"
        value={state.background}
        name='background'
        onChange={handleInputChange}

        multiline
      /> */}
      
      <button onClick={handleChangeProfile}>Edit Profile</button>
    </>
  )
}


export default ProfileSettingForm