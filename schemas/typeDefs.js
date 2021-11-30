const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    body: String!
  }
  type User {
    _id: ID!
    name: String!
    email: String!
    posts: [Post!]
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    posts: [Post!]
    post(_id: ID!): Post!
  }
  type Mutation {
    addPost(title: String!, body: String!): Post!
    updatePost(title: String!, body: String!): Post!
    deletePost(_id: ID!): Post
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs
