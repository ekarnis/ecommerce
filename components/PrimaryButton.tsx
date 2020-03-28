export default props => {
  return (
    <button
      onClick={() => props.onClick ? props.onClick() : null}
      className="
      inline-block text-md px-4 py-2 m-4 border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500
      "
      style={props.inlineStyle}
    >
      {props.buttonText}
    </button>
  )
}
