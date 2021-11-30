import { useReducer } from 'react'
import { GET_POSTS, ADD_POST, UPDATE_POST,UPDATE_TEXT, UPDATE_TITLE, DELETE_POST } from './action.js'
export const reducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case ADD_POST:
      return {
        ...state,
        posts: [...state.items, action.item],
        text: '',
        title: ''
      }
    case UPDATE_POST:
      let posts = JSON.parse(JSON.stringify(state.posts))
      posts = posts.map(post => {
        if (post._id === action._id) {
          post.title = action.title
          post.text = action.title
        }
        return post
      })
      return {
        ...state,
        posts
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action._id)
      }
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}

export function useItemReducer(state) {
  return useReducer(reducer, state)
}
