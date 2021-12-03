import decode from 'jwt-decode'

const AuthService = {
  loggedIn() {
    const token = localStorage.getItem('token')
    return !!token && !this.isTokenExpired(token)
  },
  isTokenExpired(token) {
    try {
      const decoded = decode(token)
      if (decoded.exp < Date.now() / 1000) {
        return true
      } else {
        return false
      }
    } catch (err) {
      return false
    }
  },
  login(token, user) {
    localStorage.setItem('token', token)
    localStorage.setItem('name', user.name)
    localStorage.setItem('email', user.email)
    localStorage.setItem('profile', user.profile)
    localStorage.setItem('userId', user._id)
    window.location = "/home"
  },
  logout() {
    console.log("logout")
    localStorage.removeItem('token')
    window.location = "/auth"
  }

}

export default AuthService
