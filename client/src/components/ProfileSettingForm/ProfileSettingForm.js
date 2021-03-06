import './ProfileSettingForm.css'
import { useQuery, useMutation } from '@apollo/client'

import { UPDATE_PROFILE } from '../../utils/mutations'
import TextField from '@mui/material/TextField'




const ProfileSettingForm = ({state,dispatch}) => {
  
  const [updateProfile,{error}] = useMutation(UPDATE_PROFILE)
  
  if(error){
    console.log(error)
  }


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
    
    let user = JSON.parse(JSON.stringify(state.user))
    console.log(user)
    user.profile.bio = state.bio
    user.profile.profileImage= state.profileImage
    user.profile.background = state.background
    console.log({...user.profile})
   
    try {
      const { data } = await updateProfile({
        variables: {_id:user._id, bio: user.profile.bio, profileImage: user.profile.profileImage, background: user.profile.background}
      })
      console.log(data)
      
      dispatch({
        type: 'UPDATE_PROFILE',
        user
      })
    }
    catch (err) {
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
      <TextField
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
      />
      
      <button onClick={handleChangeProfile}>Edit Profile</button>
    </>
  )
}


export default ProfileSettingForm