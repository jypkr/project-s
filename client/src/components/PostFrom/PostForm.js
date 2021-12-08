import './PostForm.css'
import { useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useStoreContext } from '../../utils/GlobalState.js'
import { QUERY_POSTS } from '../../utils/queries.js'
import { ADD_POST, UPDATE_POST, DELETE_POST } from '../../utils/mutations'
import PostCard from '../PostCard'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ConstructionOutlined, SettingsInputAntennaTwoTone } from '@mui/icons-material'
import AuthService from '../../utils/auth.js'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const PostForm = () => {
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
      console.log(data)
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

  const getUser=()=>{
    let { _id } = AuthService.getUser()
    return _id
  }


  const handleDeletePost = async (id) => {

    const post = {
      _id: id
    }

    try {
      const { data } = await deletePost({
        variables: post
      })
      dispatch({
        type: 'DELETE_POST',
        post
      })

    } catch (err) {
      console.error(err)
      console.log(post)
    }
  }

  const handleAddPost = async event => {
    event.preventDefault()
    let posted = String(Date.now())
    console.log(state.image)

    const post = {
      _id: 1,
      title: state.title,
      body: state.body,
      image: state.image,
      posted: posted,
      user: getUser()

    }

    try {
      const { data } = await addPost({
        variables: post
      })

      post._id = data.addPost._id

      dispatch({
        type: 'ADD_POST',
        post
      })


    } catch (err) {
      console.error(err)
      console.log(data)
    }
  }

  const handleLike = async (_id) => {
    //Need to get UserId
    let userID = localStorage.getItem('userId')
    let post = {
      _id: _id,
      title: 'title',
      body: 'body',
      image: 'image',
      likedBy: [],
      dislikedBy: []
    }
    state.posts.forEach(element => {
      if (element._id === post._id) {
        post.title = element.title
        post.body = element.body
        post.image = element.image
        if (element.likedBy && element.likedBy.length > 0) {
          console.log('length >0')
          let duplicate = element.likedBy.filter(temp => temp === userID)
          console.log(duplicate)
          if (duplicate) {
            console.log('already in')
            let array = []
            element.likedBy.forEach(temp => {
              if (temp !== userID) {
                array.push(temp)
              }
            });

            post.likedBy = array
          } else {
            post.likedBy = [...element.likedBy, userID]
          }

        } else {
          post.likedBy = [userID]
        }
        let flag = post.dislikedBy.length
        console.log(flag)
        if (flag != 0) {
          post.dislikedBy = element.disliked.filter(element => element !== userID)
        }

      }
    })

    try {
      const { data } = await updatePost({
        variables: post
      })
      dispatch({
        type: 'UPDATE_POST',
        post
      })
    }
    catch (err) {
      console.error(err)

    }



  }
  const handleDislike = async (_id) => {
    //Need to get UserId
    let userID = localStorage.getItem('userId')
    let post = {
      _id: _id,
      title: 'title',
      body: 'body',
      image: 'image',
      likedBy: [],
      dislikedBy: []
    }
    state.posts.forEach(element => {
      if (element._id === post._id) {
        post.title = element.title
        post.body = element.body
        post.image = element.image
        //filter out userId from element.likedBy

        let flag = post.likedBy.length
        console.log(flag)
        if (flag != 0) {
          post.likedBy = element.likedBy.filter(element => element !== userID)
        }

        if (element.dislikedBy && element.dislikedBy.length > 0) {
          let duplicate = element.dislikedBy.filter(temp => temp === userID)
          console.log(duplicate)
          if (duplicate) {
            console.log('already in')
            let array = []
            element.dislikedBy.forEach(temp => {
              if (temp !== userID) {
                array.push(temp)
              }
            });

            post.dislikedBy = array
          }

        } else {
          post.dislikedBy = [userID]
        }

      }
    })

    try {
      const { data } = await updatePost({
        variables: post
      })
      dispatch({
        type: 'UPDATE_POST',
        post
      })
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <>

      <Box
        sx={{ flexGrow: 1 }}>
        <Grid

          container
          direction='column'
          justifyContent="center"
          alignItems="center"
          spacing={2}

        >
          <Grid item xs={12}>
            <Stack
              pb={4}
              spacing={2}
            >

              <TextField
                id="outlined-textarea"
                label="title"
                placeholder="title"
                value={state.title}
                name='title'
                onChange={handleInputChange}

                multiline
              />
              <TextField
                id="outlined-textarea"
                label="body"
                placeholder="body"
                value={state.body}
                name='body'
                onChange={handleInputChange}
                rows={4}
                multiline
              />
              <TextField
                id="outlined-textarea"
                label="image"
                placeholder="image"
                value={state.image}
                name='image'
                onChange={handleInputChange}

                multiline
              />

              <button onClick={handleAddPost}>Add Post</button>


            </Stack>
            <Grid item xs={12}>
              <Item>
                {
                  loading ? (
                    <span>loading... please wait</span>
                  ) : (
                    state.posts.map(post => (
                      <PostCard
                        title={post.title}
                        body={post.body}
                        image={post.image}
                        posted={post.posted}
                        _id={post._id}
                        likedBy={post.likedBy}
                        dislikedBy={post.dislikedBy}
                        handleLike={handleLike}
                        handleDislike={handleDislike}
                        handleDeletePost={handleDeletePost}
                      >

                      </PostCard>

                    ))
                  )
                }
              </Item>
            </Grid>
          </Grid>



        </Grid>

      </Box>

    </>
  )
}


export default PostForm