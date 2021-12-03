const { model, Schema } = require('mongoose')

const Post = new Schema({
  hide: {type:Boolean, default: false},
  title: String,
  body: String,
  image: String,
  posted: String,
  likedBy: Schema.Types.ObjectId ,
  dislikedBy: Schema.Types.ObjectId ,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
  
})

module.exports = model('Post', Post)
