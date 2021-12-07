import decode from 'jwt-decode'

const AuthService = {

  getUser(){
    try {
      let token = localStorage.getItem('token')
      const decoded = decode(token)
      console.log(decoded)
      return decoded
    } catch (error) {
      
    }
  },
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
    window.location = "/home"
  },
  logout() {
    console.log("logout")
    localStorage.removeItem('token')
    window.location = "/auth"
  }

}

export default AuthService
