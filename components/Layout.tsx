import Header from './Header'
import { Auth0Provider } from '../auth/react-auth0-spa'
import { useRouter } from 'next/router'

import LoginRedirectCallback from '../auth/loginRedirectCallback'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirect_uri={process.env.REACT_APP_BASE_URL + "/redirect-login"}
      onRedirectCallback={LoginRedirectCallback(router)}
    >
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-col flex-grow items-center justify-start pt-10 px-32 bg-gray-100">
          {children}
        </div>
      </div>
    </Auth0Provider>
  )
}

export default Layout
