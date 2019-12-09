<<<<<<< HEAD
// Class with static methods lets us use the class without
// instantiating it
=======
>>>>>>> development
class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

<<<<<<< HEAD
  static logout() {
    localStorage.removeItem('token')
  }

  static getUserId() {
    const token = this.getToken()
    if (!token) return false
=======
  static getUserId() {
    const token = this.getToken()
    if (!token) return false 
>>>>>>> development
    const parts = token.split('.')
    return JSON.parse(atob(parts[1])).sub
  }

<<<<<<< HEAD
=======
  static logout() {
    localStorage.removeItem('token')
  }

>>>>>>> development
  static isAuthorized() {
    return this.getToken()
  }

}

<<<<<<< HEAD
export default Auth

/* Alternatively we could have used an object, like so:

export default {
  setToken(token) {
    localStorage.setItem('token', token)
  },
  getToken() {
    return localStorage.getItem('token')
  }
}
*/
=======
export default Auth
>>>>>>> development
