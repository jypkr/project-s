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
export const QUERY_USERS = gql`
  query {
    users {
      _id
      name
      email      
    }
  }
`

export const QUERY_USER = gql`
  query User($_id:ID!) {
    user(_id:$_id) {
      _id
      name
      email
      profile{
        bio
        profileImage
        background
      }
      posts{
        _id
      }
      friends
      friendRequests
      favPosts
      
      

      
         
    }
  }
`

