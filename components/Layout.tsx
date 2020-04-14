import Header from './Header'
import { Auth0Provider } from '../react-auth0-spa'
import config from '../pages/auth_config.json'
import { useRouter } from 'next/router'

import LOGIN_REDIRECT from '../loginRedirectCallback'

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={process.env.REDIRECT_URI}
      onRedirectCallback={LOGIN_REDIRECT(router)}
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
