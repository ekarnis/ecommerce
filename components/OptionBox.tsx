export default props => {
  return (
    <a className="w-64 flex flex-col items-center p-4 m-4 border border-gray-200 hover:border-gray-400 bg-white rounded-lg shadow-lg hover:shadow-xl">
      <h3 className="text-3xl font-bold text-indigo-500">{props.name}</h3>
      <img src={props.picture_url}></img>
      <button
        onClick={() =>
          props.setHook({
            id: props.id, name: props.name, picture_url: props.picture_url
          })
        }
        className="inline-block text-md px-4 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 "
      >
            Choose
      </button>
    </a>
  )
}
