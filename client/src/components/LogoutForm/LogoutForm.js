import './LogoutForm.css'
import AuthService from '../../utils/auth.js'

const LogoutForm = () => {

  const handleLogoutUser = async event => {
    event.preventDefault()
    AuthService.logout()
  }

  return (
    <>
      <form onSubmit={handleLogoutUser}>
        <div className='flex-row flex-end'>
          <button type='submit'>Logout</button>
        </div>
      </form>
    </>
  )
}


export default LogoutForm