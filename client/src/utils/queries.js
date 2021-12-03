import { gql } from '@apollo/client'

export const QUERY_POSTS = gql`
  query {
    posts {
      _id
      title
      body
      image
      posted
      likedBy
      dislikedBy
       
    }
  }
`
export const QUERY_USER = gql`
  query {
    user {
      _id
      name
      email      
    }
  }
`
