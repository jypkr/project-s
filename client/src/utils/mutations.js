import { gql } from '@apollo/client'

export const ADD_POST = gql`
  mutation addPost( $title: String!, $body: String!) {
    addPost(title: $title, body: $body) {
      _id
      title
      body
 
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($_id: ID!, $title: String!, $body: String!) {
    updatePost(_id: $_id,  title: $title, body: $body) {
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
          title
          body
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
      }
    }
  }
`
