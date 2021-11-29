const { Post, User } = require('../models')
const { signToken } = require('../utils/auth.js')


const resolvers = {
  Query: {
    posts: async () => await Post.find({}),
    post: async (parent, { _id }) => await Post.findById(_id)
  },
  Mutation: {
    addPost: async (parent, item) => await Post.create(post),
    deleteItem: async (parent, { _id }) => await Post.findByIdAndDelete(_id),
    register: async (parent, data) => {
      const user = await User.create(data)
      const token = signToken(user._id)
      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate('items')
      if (user) {
        const correct = await user.isCorrectPassword(password)
        if (correct) {
          const token = signToken(user._id)
          return { token, user }
        }
      }
    }
  }
}

module.exports = resolvers