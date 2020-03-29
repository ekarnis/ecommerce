import Link from 'next/link'

import PrimaryButton from '../components/PrimaryButton'

export default props => {
  return (
    <Link
      href="/boards/[id]"
      as={
        '/boards/' +
        props.id
      }
    >
      <a className="w-64 flex flex-col items-center p-4 m-4 border border-gray-200 hover:border-gray-400 bg-white rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-3xl font-bold text-indigo-500">{props.wood.name}</h3>
        <span>
          {props.width_in_cm}cm x {props.length_in_cm}cm x {props.thickness_in_cm}cm
        </span>
        <span className="mb-4">{props.stain.name}</span>
        <img className="my-2" src={props.picture_url}></img>
        <PrimaryButton buttonText={'Add to Cart'} />
      </a>
    </Link>
  )
}
