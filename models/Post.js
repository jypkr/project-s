const { model, Schema } = require('mongoose')

const Post = new Schema({
  hide: {type:Boolean, default: false},
  title: String,
  body: String,
  image: String,
  posted: String,
  likedBy: {type: [Schema.Types.ObjectId], default: []} ,
  dislikedBy: { type: [Schema.Types.ObjectId], default: [] } ,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
  
})

module.exports = model('Post', Post)
