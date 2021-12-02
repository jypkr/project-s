import Navbar from '../../components/NavBar/Navbar'
import PostForm from '../../components/PostFrom'
import { useState, useEffect } from 'react'

const Profile = () => {

  const [userinfoState, setUserinfoState] = useState({
    name: String,
    bio: String,
    profileImage: String,
    background: String
  })




  return (
    <>
      <h1>The Profile Page</h1>
      <PostForm></PostForm>
      <Navbar></Navbar>
    </>

  )


}

export default Profile