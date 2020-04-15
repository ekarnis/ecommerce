import Cookies from 'universal-cookie'

// A function that routes the user to the right place after login
const LoginRedirectCallback = (nextRouter) => {
  const cookies = new Cookies()
  const redirectPath = cookies.get('loginRedirctPath')
  cookies.remove('loginRedirctPath')

  return () => nextRouter.push(
    redirectPath ??
    nextRouter.pathname
  )
}

export default LoginRedirectCallback
