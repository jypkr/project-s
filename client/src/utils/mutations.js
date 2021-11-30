import { gql } from '@apollo/client'

export const ADD_POST = gql`
  mutation addPost($text: String!, $title: String!, $text: String!) {
    addPost(text: $text,  title: $title) {
      _id
      text
      title
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($_id: ID!, $title: String!, $text: String!) {
    updatePost(_id: $_id,  title: $title, text: $text) {
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
  mutation login ($email: String, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        posts {
          _id
          text
          title
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
