import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { StoreProvider } from './utils/GlobalState.js'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import Friends from './pages/Friends'
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
              <Route exact path='/profile'>
                <Profile />
              </Route>
              <Route exact path='/messages'>
                <Messages />
              </Route>
              <Route exact path='/friends'>
                <Friends />
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
