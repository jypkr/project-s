require('dotenv').config()
const express = require('express')
const { join } = require('path')
const syncDB = require('./db')

const { ApolloServer, ApolloError } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')




const app = express()

const server = new ApolloServer({
	typeDefs,
	resolvers,
	formatError: (err) => {
		// Don't give the specific errors to the client.
		if (err.message.startsWith('Database Error: ')) {
			return new Error('Internal server error');
		}
		// Otherwise return the original error. The error can also
		// be manipulated in other ways, as long as it's returned.
		return err;
	},
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
