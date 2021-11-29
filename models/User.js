const { model, Schema } = require('mongoose')
const bcrypt = require('bcrypt')

const User = new Schema({
  name: String,
  email: String,
  password: String,
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
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