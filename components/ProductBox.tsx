import Link from 'next/link'

export default props => {
  return (
    <Link
      href="/boards/[id]"
      as={
        '/boards/' +
        props.stain.name +
        '-' +
        props.wood.name +
        '-' +
        props.width_in_cm +
        '-' +
        props.length_in_cm +
        '-' +
        props.thickness_in_cm
      }
    >
      <a className="w-64 flex flex-col items-center p-4 m-4 border border-gray-200 hover:border-gray-400 bg-white rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-3xl font-bold text-indigo-500">{props.wood.name}</h3>
        <span>
          {props.width_in_cm}cm x {props.length_in_cm}cm x {props.thickness_in_cm}cm
        </span>
        <span className="mb-4">{props.stain.name}</span>
        <img src={props.picture_url}></img>
        <button className="inline-block text-md px-4 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:border-transparent hover:text-white hover:bg-indigo-500 mt-4 ">
          Add to Cart
        </button>
      </a>
    </Link>
  )
}
