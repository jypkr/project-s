import './PostForm.css'
import { useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState.js'
import { QUERY_POSTS } from '../../utils/queries.js'
import { ADD_POST, UPDATE_POST, DELETE_POST } from '../../utils/mutations'



const PostForm = () =>{
  const [state, dispatch] = useStoreContext()
  const { loading, data } = useQuery(QUERY_POSTS)

  const [addPost] = useMutation(ADD_POST)
  const [updatePost] = useMutation(UPDATE_POST)
  const [deletePost] = useMutation(DELETE_POST)


  useEffect(() => {
    if (data) {
      dispatch({
        type: 'GET_POSTS',
        posts: data.posts
      })
    }
  }, [data])

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




  const handleAddPost = async event => {
    event.preventDefault()
    let postedDate = String(Date.now())
    console.log(state.image)
    const post = {
      title: state.title,
      body: state.body,
      image: state.image,
      postedDate: postedDate
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
      <form>
        <p>
          <label htmlFor='title'>title</label>
          <input
            type='text'
            name='title'
            value={state.title}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='body'>body</label>
          <input
            type='text'
            name='body'
            value={state.body}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor='image'>Image</label>
          <input
            type='text'
            name='image'
            value={state.image}
            onChange={handleInputChange}
          />
        </p>
        <button onClick={handleAddPost}>Add Post</button>
      </form>
      {
        loading ? (
          <span>loading... please wait</span>
        ) : (
          state.posts.map(post => (
            <li>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <p>{post.imageUrl}</p>
            </li>
          ))
        )
      }
    </>
  )
}


export default PostForm