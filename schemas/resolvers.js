const { Post, User } = require('../models')
const { signToken } = require('../utils/auth.js')


const resolvers = {
  Query: {
    posts: async () => await Post.find({}),
    post: async (parent,  {_id} ) => await Post.findById(_id),
    users: async () => await User.find({}),
    user: async (parent, {_id}) =>await User.findById(_id)
  },
  Mutation: {
    addPost: async (parent, post) => await Post.create(post),

    updatePost: async (parent, post) => await Post.findByIdAndUpdate(post._id, { $set: { title: post.title, body: post.body, image: post.image, likedBy: post.likedBy, dislikedBy: post.dislikedBy } }),

    deletePost: async (parent, { _id }) => await Post.findByIdAndDelete(_id),

    register: async (parent, data) => {
      const user = await User.create(data)
      const token = signToken(user._id)
      return { token, user }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }).populate('posts')
      console.log(user)
      if (user) {
        const correct = await user.isCorrectPassword(password)
        if (correct) {
          const token = signToken(user._id)
          return { token, user }
        }
      }
    },

    updateProfile: async (_, {_id, bio, profileImage, background}) => {
      console.log(_id)
      let user = await User.findById(_id)
      user.profile.bio=bio
      user.profile.profileImage = profileImage
      user.profile.background = background
      User.findByIdAndUpdate(_id, { $set: {user } })
      return user
      
      // return user
    },

    sendFriendRequest: async (parent, { sentTo_id, sentBy_id }) => await User.findByIdAndUpdate(sentTo_id, { $push: { friendRequests: user_id, sentBy_id } }),

    acceptFriendRequest: async (parent, { sentBy_id, sentTo_id }) => {
      await User.findByIdAndUpdate(sentTo_id, { $push: { friends: sentBy_id } })
      await User.findByIdAndUpdate(sentBy_id, { $push: { friends: sentTo_id } })
      await User.findByIdAndUpdate(sentTo_id, { $pull: { friendRequests: sentBy_id } })
    },

    denyFriendRequest: async (parent, { sentBy_id, sentTo_id }) => await User.findByIdAndUpdate(sentTo_id, { $pull: { friendRequests: sentBy_Id } }),

    deleteFriend: async (parent, { user1_id, user2_id }) => {
      await User.findByIdAndUpdate(user1_id, { $pull: { friends: user2_id } })
      await User.findByIdAndUpdate(user2_id, { $pull: { friends: user1_id } })
    }
  }
}

module.exports = resolvers