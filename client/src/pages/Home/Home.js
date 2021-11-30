import { useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState.js'
import { QUERY_POSTS } from '../../utils/queries.js'
import { ADD_POST, UPDATE_POST, DELETE_POST } from '../../utils/mutations'


const Home = () => {
  const [state, dispatch] = useStoreContext()
  const { loading, data } = useQuery(QUERY_POSTS)

  const [addPost] = useMutation(ADD_POST)
  const [updatePost] = useMutation(UPDATE_POST)
  const [deletePost] = useMutation(DELETE_POST)

  const handleInputChange = ({ target: { value } }) => dispatch({
    type: 'UPDATE_TEXT',
    text: value
  })


  const handleAddPost = async event => {
    event.preventDefault()
    const post = {
      body: state.body,
      title: 'test'
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
    }
  }


  useEffect(() => {
    if (data) {
      dispatch({
        type: 'GET_POSTS',
        posts: data.posts
      })
    }
  }, [data])
  return (
    <>
      <h1>The Home Page</h1>
      <form>
        <p>
          <label htmlFor='body'>body</label>
          <input
            type='text'
            name='body'
            value={state.body}
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
            </li>
          ))
        )
      }
    </>
  )


}

export default Home