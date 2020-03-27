export default props => {
  let stars = ''
  for (let i = 0; i < props.stars; i++) {
    stars += '⭐'
  }

  return (
    <div className="max-w-md flex flex-col items-center justify-between p-4 m-4 border border-gray-200 hover:border-gray-400 bg-white rounded-lg shadow-lg hover:shadow-xl">
      <div>
        <div className="w-full flex justify-between mb-4">
          <span className="text-indigo-500 text-lg">
            {props.name ? props.name : 'User'} - {props.country ? props.country : 'Country'}
          </span>
          <span>{stars}</span>
        </div>

        <span>{props.content}</span>
      </div>
      <div className="w-full flex justify-between mb-4">
        <button className="inline-block text-sm px-2 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 ">
          Not Helpful: {props.not_helpful_votes}
        </button>
        <button className="inline-block text-sm px-2 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 ">
          Helpful: {props.helpful_votes}
        </button>
      </div>
    </div>
  )
}
