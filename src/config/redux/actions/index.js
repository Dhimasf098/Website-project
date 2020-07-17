
export const loginAction = (data) => {
   localStorage.setItem('user',JSON.stringify(data))
   return { type: 'LOGIN_SUCCESS', payload: data }
}

export const logoutAction = () => {
   console.log()
   localStorage.removeItem('user')
   return { type: 'LOGOUT_SUCCESS' }
}