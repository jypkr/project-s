import { createContext, useContext } from 'react'
import { useItemReducer } from './reducers'

const StoreContext = createContext()

const { Provider } = StoreContext

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useItemReducer({
    user: {},
    posts: [],
    title: '',
    body: '',
    image: '',
    profile: {
      bio: '',
      profileImage: '',
      background: ''
    }
  })
  return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => useContext(StoreContext)

export { StoreProvider, useStoreContext }
