import { useReducer } from 'react'
import { GET_POSTS, ADD_POST, UPDATE_POST,UPDATE_BODY, UPDATE_TITLE, DELETE_POST, UPDATE_IMAGE, GET_USER } from './action.js'
export const reducer = (state, action) => {
  
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
        user:action.user
      }

    case GET_USER:
      return{
        state,
        user:action.user
      }
    case ADD_POST:
      console.log(action.post)
      return {
        ...state,
        posts: [...state.posts, action.post],
        title: '',
        body: '',
        image: '',
        likedBy:[],
        dislikedBy:[]
        
      }
    case UPDATE_POST:
      let posts = JSON.parse(JSON.stringify(state.posts))
      console.log(action)
      posts = posts.map(post => {
        if (post._id === action.post._id) {
          
          post.title = action.post.title
          post.body = action.post.body
          post.image= action.post.image
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
