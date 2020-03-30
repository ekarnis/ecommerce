import PrimaryButton from '../components/PrimaryButton'

export default props => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div
        className="absolute inset-0 z-30 bg-gray-900 opacity-75"
        onClick={() => props.setShowSignInModal(false)}
      >
      </div>

      <form
        className="relative z-40 bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-indigo-500 text-sm font-bold mb-2"
            htmlFor="username"
          >
              Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            autoComplete="username"
          />
        </div>
        <div>
          <label
            className="block text-indigo-500 text-sm font-bold mb-2"
            htmlFor="password"
          >
              Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            autoComplete="password"
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <PrimaryButton buttonText={'Sign In'} />
          <button
            className="mb-2 text-sm text-indigo-500 hover:text-indigo-800"
          >
                Forgot Password?
          </button>
          <hr className="border-gray-300 m-2 w-full"/>
          <div className="flex">
            <PrimaryButton buttonText={'Google'} />
            <PrimaryButton buttonText={'Facebook'} />
          </div>

        </div>
      </form>
    </div>
  )
}
