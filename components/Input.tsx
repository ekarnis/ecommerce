
const Input = props => {
  return (
    <div className="w-64 px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {props.label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type={props.type}
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
