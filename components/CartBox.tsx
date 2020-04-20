import PrimaryButton from '../components/PrimaryButton'

export default props => {
  const wood = props.board.wood ? props.board.wood : props.wood
  const stain = props.board.stain ? props.board.stain : props.stain
  const width = props.board.width_in_cm ? props.board.width_in_cm : props.width_in_cm
  const length = props.board.length_in_cm ? props.board.length_in_cm : props.length_in_cm
  const thickness = props.board.thickness_in_cm ? props.board.thickness_in_cm : props.thickness_in_cm
  const pictureURL = props.board.picture_url ? props.board.picture_url : props.picture_url
  const price = props.board.price_in_cad ? props.board.price_in_cad : props.price_in_cad

  return (
    <div
      className="w-3/5 flex justify-between items-center py-1 px-4 m-2 border border-gray-200 bg-white rounded-lg shadow-md"
    >
      <img className="m-1 w-32" src={pictureURL}></img>
      <span className="flex items-center">
        <span className="text-3xl font-bold text-indigo-500 mr-4">
          {wood.name}
        </span>
        {stain.name}, &nbsp;
        {width}cm x {length}cm x {thickness}cm
      </span>
      <span>
        <PrimaryButton
          onClick={() => {}}
          buttonText={'-'}
        />
        {props.quantity}
        <PrimaryButton
          onClick={() => {}}
          buttonText={'+'}
        />
        ${price} CAD
      </span>
    </div>
  )
}
