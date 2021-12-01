const { model, Schema } = require('mongoose')

const Post = new Schema({
  hide: Boolean,
  title: String,
  body: String,
  imageUrl: String,
  likes: {
    count: Number,
    likedBy: [
      { _id: Schema.Types.ObjectId }
    ]
  },
  dislikes: {
    count: Number,
    dislikedBy: [
      { _id: Schema.Types.ObjectId }
    ]
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  postedDate: { type: Date, default: Date.now }
})

module.exports = model('Post', Post)
