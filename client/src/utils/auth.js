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
  login(token) {
    localStorage.setItem('token', token)

    
  },
  logout() {
    localStorage.removeItem('token')
  }
  
}

export default AuthService
