import { ConstructionOutlined } from '@mui/icons-material'
import { useReducer } from 'react'
import { GET_POSTS,GET_USER, ADD_POST, UPDATE_POST, UPDATE_BODY, UPDATE_TITLE, DELETE_POST, UPDATE_IMAGE, GET_USERS, UPDATE_PROFILE, UPDATE_NAME, UPDATE_EMAIL, UPDATE_BIO, UPDATE_PROFILEIMAGE, UPDATE_BACKGROUND } from './action.js'
export const reducer = (state, action) => {

  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
        
      }

    case GET_USERS:
      let users = []
      users= [...action.users]
     
      return {
        ...state,
        users: users
      }

    case GET_USER:
     
      return {
        ...state,
        user: action.user
      }

    case ADD_POST:
      
      return {
        ...state,
        posts: [...state.posts, action.post],
        title: '',
        body: '',
        image: '',
        likedBy: [],
        dislikedBy: []
      }

    case UPDATE_POST:
      let posts = JSON.parse(JSON.stringify(state.posts))
      console.log(action)
      posts = posts.map(post => {
        if (post._id === action.post._id) {

          post.title = action.post.title
          post.body = action.post.body
          post.image = action.post.image
          post.likedBy = action.post.likedBy
          post.dislikedBy = action.post.dislikedBy
        }
        return post
      })
      console.log(posts)
      return {
        ...state,
        posts
      }

    case UPDATE_PROFILE:
      
     console.log(action)
      return {
        ...state,
        user: action.user
      }

    case DELETE_POST:
      let array = []
      state.posts.forEach(post => {
        console.log(post._id)
        console.log(action.post._id)
        if (!(post._id === action.post._id)) {
          array.push(post)
        }
      });
      return {
        ...state,
        posts: [...array]
      }

    case UPDATE_BODY:
      return {
        ...state,
        body: action.body
      }

    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }

    case UPDATE_IMAGE:
      return {
        ...state,
        image: action.image
      }

    case UPDATE_NAME:
      return {
        ...state,
        name: action.name
      }

    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email
      }

    case UPDATE_BIO:
      console.log(action)
      return {
        ...state,
        bio: action.bio
      }

    case UPDATE_PROFILEIMAGE:
      return {
        ...state,
        profileImage: action.profileImage
      }

    case UPDATE_BACKGROUND:
      return {
        ...state,
        background: action.background
      }

    default:
      return state
  }
}

export function useItemReducer(state) {
  return useReducer(reducer, state)
}
