import Cookies from 'universal-cookie'

// A function that routes the user to the right place after login
const LOGIN_REDIRECT = (nextRouter) => {
  const cookies = new Cookies()
  const redirectPath = cookies.get('loginRedirctPath')
  cookies.remove('loginRedirctPath')

  return () => nextRouter.push(
    redirectPath ??
    nextRouter.pathname
  )
}

export default LOGIN_REDIRECT
