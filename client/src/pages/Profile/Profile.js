import Navbar from '../../components/NavBar/Navbar'
import PostForm from '../../components/PostFrom'
import ProfileSettingForm from '../../components/ProfileSettingForm'
import { useState, useEffect } from 'react'

const Profile = () => {
  const name = localStorage.getItem('name')
  const email = localStorage.getItem('email')
  const profile = localStorage.getItem('profile')


  return (
    <>
      <h1>The Profile Page</h1>
      <h2>Name: {name}</h2>
      <h2>email: {email}</h2>
      <h2>profile: {profile}</h2>
      <PostForm></PostForm>
      
      <Navbar></Navbar>
    </>

  )


}

export default Profile