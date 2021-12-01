import { useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState.js'
import { QUERY_POSTS } from '../../utils/queries.js'
import { ADD_POST, UPDATE_POST, DELETE_POST } from '../../utils/mutations'
import PostForm from '../../components/PostFrom'

const Home = () => {
  const [state, dispatch] = useStoreContext()
  const { loading, data } = useQuery(QUERY_POSTS)



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
      <PostForm></PostForm>
      </>

  )


}

export default Home