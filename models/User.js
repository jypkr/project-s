const { model, Schema } = require('mongoose')
const bcrypt = require('bcrypt')

const User = new Schema({
  name: String,
  email: String,
  password: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  friendRequests: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
})

User.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
})

User.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = model('User', User)