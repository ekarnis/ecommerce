export default props => {
  // translation so it'll work with custom and in stock boards
  const wood: string = props.board ? props.board.wood.name : props.wood.name
  const stain: string = props.board ? props.board.stain.name : props.stain.name
  const width: string = props.board ? props.board.width_in_cm : props.width_in_cm
  const length: string = props.board ? props.board.length_in_cm : props.length_in_cm
  const thickness: string = props.board ? props.board.thickness_in_cm : props.thickness_in_cm
  const price: string = props.board ? props.board.price_in_cad : props.price_in_cad

  const pictureURL: string = props.board ? props.board.picture_url : '/board.jpg'

  return (
    <div
      className='w-full flex justify-between items-center m-2'
    >
      <img className='m-1 w-32' src={pictureURL}></img>
      <span className='items-center'>
        <span className='text-xl font-bold text-indigo-500 mr-4'>
          {props.board ? null : 'Custom: '} {wood}
        </span>
        <div className='flex-col'>
          <span>{stain}, &nbsp;</span>
          <span>{width}cm x {length}cm x {thickness}cm</span>
        </div>
      </span>
      <span className='flex-col'>
        <span className='flex'>Quantity: {props.quantity}</span>
        <span className='flex'>${price} CAD</span>
      </span>
    </div>
  )
}
