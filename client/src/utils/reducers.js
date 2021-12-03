import { useReducer } from 'react'
import { GET_POSTS, ADD_POST, UPDATE_POST,UPDATE_BODY, UPDATE_TITLE, DELETE_POST, UPDATE_IMAGE } from './action.js'
export const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case ADD_POST:
      console.log(action.post)
      return {
        ...state,
        posts: [...state.posts, action.post],
        title: '',
        body: '',
        image: ''
      }
    case UPDATE_POST:
      let posts = JSON.parse(JSON.stringify(state.posts))
      posts = posts.map(post => {
        if (post._id === action._id) {
          post.title = action.title
          post.body = action.body
          post.image= action.image
          
        }
        return post
      })
      return {
        ...state,
        posts
      }
    case DELETE_POST:
      let array=[]
      state.posts.forEach(post => {
        console.log(post._id)
        console.log(action.post._id)
        if(!(post._id ===action.post._id)){
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
    default:
      return state
  }
}

export function useItemReducer(state) {
  return useReducer(reducer, state)
}
