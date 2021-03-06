import Cookies from 'universal-cookie'
import { useMutation } from '@apollo/react-hooks'
import ADD_NEW_APP_USER from '../graphql/mutations/addNewAppUser.mutation'

// A function that routes the user to the right place after login
const LoginRedirectCallback = (nextRouter) => {
  const [addNewAppUser] = useMutation(ADD_NEW_APP_USER)

  const cookies = new Cookies()
  const redirectPath = cookies.get('loginRedirctPath')
  cookies.remove('loginRedirctPath')

  return authUser => {
    nextRouter.push(
      redirectPath ??
    nextRouter.pathname
    )

    addNewAppUser({
      variables: {
        auth0UserId: authUser.sub,
        email: authUser.email,
        name: authUser.name
      }
    })
  }
}

export default LoginRedirectCallback
