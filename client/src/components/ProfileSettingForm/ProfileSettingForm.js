import './ProfileSettingForm.css'
import { useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState.js'
import { QUERY_POSTS } from '../../utils/queries.js'
import { ADD_POST, UPDATE_POST, DELETE_POST } from '../../utils/mutations'



const ProfileSettingForm = () =>{
  const [state, dispatch] = useStoreContext()
  const { loading, data } = useQuery(QUERY_POSTS)

  const [addPost] = useMutation(ADD_POST)
  const [updatePost] = useMutation(UPDATE_POST)
  const [deletePost] = useMutation(DELETE_POST)


  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'title':
        dispatch({
          type: 'UPDATE_TITLE',
          title: target.value
        })
        break
      case 'body':
        dispatch({
          type: 'UPDATE_BODY',
          body: target.value
        })
        break
      case 'image':
        dispatch({
          type: 'UPDATE_IMAGE',
          image: target.value
        })
        break
      default:
        break
    }
  }




  const handleChangeProfile = async event => {
    event.preventDefault()
    let posted = String(Date.now())
    console.log(state.image)
    const post = {
      title: state.title,
      body: state.body,
      image: state.image,
      posted: posted
    }

    try {
      const { data } = await addPost({
        variables: post
      })
      dispatch({
        type: 'ADD_POST',
        post
      })
      
    } catch (err) {
      console.error(err)
      console.log(post)
    }
  }

  return (
    <>
      <form id="changeprofile">
        <p>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='body'>email</label>
          <input
            type='text'
            name='body'
            value={state.body}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='image'>bio</label>
          <input
            type='text'
            name='image'
            value={state.image}
            onChange={handleInputChange}
          />
        </p>
        <button onClick={handleChangeProfile}>Change Profile</button>
      </form>
    </>
  )
}


export default ProfileSettingForm