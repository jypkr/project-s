require('dotenv').config()
const express = require('express')
const { join } = require('path')
const syncDB = require('./db')

const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')

const app = express()

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: require('./utils/auth.js').authMiddleware
})

server.applyMiddleware({ app })

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('*', (req, res) => {
	res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

syncDB()
	.then(() => app.listen(process.env.PORT || 3001))
	.catch(err => console.log(err))
