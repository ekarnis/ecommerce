import { useAuth0 } from '../auth/react-auth0-spa'
import Link from 'next/link'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'

export default () => {
  const { loading, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const cookies = new Cookies()
  const router = useRouter()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-900 p-2">
      <span className="font-semibold text-4xl text-white ml-2 mr-8">
        Cutting Boards
      </span>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl lg:flex-grow text-white">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-indigo-200 mr-8">
              Home
            </a>
          </Link>
          <Link href="/custom">
            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-indigo-200 mr-8">
              Custom Orders
            </a>
          </Link>
          <Link href="/in-stock">
            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-indigo-200 mr-8">
              In Stock
            </a>
          </Link>
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 hover:text-indigo-200">
              Contact Us
            </a>
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <input
            className="w-3/4 bg-white focus:shadow-outline rounded py-2 px-4 appearance-none"
            type="search"
            placeholder="Search"
          ></input>
        </div>
        <div className="flex justify-between flex-shrink-0 text-white">
          {!isAuthenticated && (
            <div onClick={() => {
              cookies.set('loginRedirctPath', router.pathname, { path: '/' })
              if (loading === false) { loginWithRedirect({}) }
            }}
            className="inline-block text-md  leading-none rounded hover:text-indigo-900 hover:bg-white px-2 py-4 mr-2 mt-4 lg:mt-0 cursor-pointer">
                Sign In / Sign Up
            </div>
          )}

          {isAuthenticated && (
            <div onClick={() => logout({ returnTo: 'http://localhost:3000/logout' })}
              className="inline-block text-md  leading-none rounded hover:text-indigo-900 hover:bg-white px-2 py-4 mr-2 mt-4 lg:mt-0 cursor-pointer">
              Log out
            </div>)}

          <Link href="/cart">
            <a className="inline-block text-md leading-none border rounded border-white bg-white text-indigo-900 hover:text-white hover:bg-indigo-900 p-4 mr-2 mt-4 lg:mt-0">
              Cart
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
