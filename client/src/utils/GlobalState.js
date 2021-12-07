import { createContext, useContext } from 'react'
import { useItemReducer } from './reducers'

const StoreContext = createContext()

const { Provider } = StoreContext

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useItemReducer({
    users: [],
    posts: [],
    title: '',
    body: '',
    image: '',
    bio: '',
    profileImage: '',
    background: '',
    name:'',
    email:'',
    _id:'',
    user:{
      _id:'',
      name:'',
      email:''
    }


  })
  return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => useContext(StoreContext)

export { StoreProvider, useStoreContext }
