import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { StoreProvider } from './utils/GlobalState.js'
import Home from './pages/Home'
import Auth from './pages/Auth'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Switch>
              <Route exact path='/home'>
                <Home />
              </Route>
              <Route path='/'>
                <Auth />
              </Route>
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
