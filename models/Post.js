const { model, Schema } = require('mongoose')

const Post = new Schema({
  hide: {type:Boolean, default: false},
  title: String,
  body: String,
  image: String,
  postedDate: String,
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
  }
  
})

module.exports = model('Post', Post)
