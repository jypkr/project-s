import { gql } from '@apollo/client'

export const QUERY_POSTS = gql`
  query {
    POSTS {
      _id
      text
      title
    }
  }
`
