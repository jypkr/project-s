import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { REGISTER_USER, LOGIN_USER } from '../../utils/mutations.js'
import AuthService from '../../utils/auth.js'

const Login = () => {

  const [authState, setAuthState] = useState({
    email: '',
    password: '',
  })


  const [login] = useMutation(LOGIN_USER)

  const handleInputChange = ({ target: { name, value } }) => setAuthState({ ...authState, [name]: value })



  const handleLoginUser = async event => {
    // Need more function for validation
    if (authState.lEmail === "" || authState.lPassword === "") {
      event.preventDefault()
      alert("enter email or pwd")
    }
    else {
      event.preventDefault()
      const { data: { login: { token, user } } } = await login({
        variables: {
          email: authState.lEmail,
          password: authState.lPassword
        }
      })

      AuthService.login(token, user)
    }
  }


  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLoginUser}>
        <div className='flex-row space-between my-2'>
          <label htmlFor='lEmail'>Email:</label>
          <input
            placeholder='youremail@test.com'
            name='lEmail'
            type='lEmail'
            id='lEmail'
            onChange={handleInputChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='lPassword'>Password:</label>
          <input
            placeholder='******'
            name='lPassword'
            type='lPassword'
            id='lPassword'
            onChange={handleInputChange}
          />
        </div>
        <div className='flex-row flex-end'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </>
  )
}
export default Login