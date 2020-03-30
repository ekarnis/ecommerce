import PrimaryButton from '../components/PrimaryButton'

export default props => {
  return (
    <a className="w-64 flex flex-col items-center p-4 m-4 border border-gray-200 hover:border-gray-400 bg-white rounded-lg shadow-lg hover:shadow-xl">
      <h3 className="text-3xl font-bold text-indigo-500 mb-4">{props.name}</h3>
      <img className="my-2" src={props.picture_url}></img>
      <PrimaryButton
        onClick={() => props.setHook({
          id: props.id, name: props.name, picture_url: props.picture_url
        })}
        buttonText={'Choose'}
      />
    </a>
  )
}
