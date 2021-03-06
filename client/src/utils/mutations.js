import { gql } from '@apollo/client'



export const ADD_POST = gql`
  mutation addPost( $title: String!, $body: String!, $image: String! , $posted: String!, $user: ID!) {
    addPost(title: $title, body: $body, image: $image, posted: $posted, user: $user) {
      _id
      title
      body
      image
      posted
      likedBy
      dislikedBy
      user
      
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($_id: ID!, $title: String!, $body: String!, $image: String!, $likedBy:[ID], $dislikedBy: [ID]) {
    updatePost(_id: $_id,  title: $title, body: $body, image: $image, likedBy:$likedBy, dislikedBy: $dislikedBy) {
      _id
      
    }
  }
`

export const DELETE_POST = gql`
  mutation deletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
    }
  }
`

export const LOGIN_USER = gql`
  mutation login ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        posts {
          _id
          hide
          title
          body
          image
          posted
        }
      }
    }
  }
`
export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        posts {
          _id
          hide
          title
          body
          image
          posted
        }
      }
    }
  }
`

export const UPDATE_PROFILE = gql`
  mutation updateProfile($_id: ID!, $bio: String!, $profileImage: String!, $background: String!) {
    updateProfile(_id: $_id, bio: $bio, profileImage: $profileImage, background: $background) {
      _id
      profile{
        bio
        profileImage
        background
      }
    }
  }
`