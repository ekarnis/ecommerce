
import { useMutation } from '@apollo/react-hooks'
import CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION from '../constants/graphql/changeInStockItemsInCart.mutation'

import PrimaryButton from '../components/PrimaryButton'

export default props => {
  const [changeInStockItemsInCart] = useMutation(CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION)

  const changeInStockItemsInCartOnClick = (newQuantity, boardId) => {
    changeInStockItemsInCart({
      variables: {
        userId: 1,
        boardId: boardId,
        quantity: newQuantity
      }
    }).then(() => props.refetch())
  }

  // translation so it'll work with custom and in stock boards

  const wood = props.board.wood ? props.board.wood : props.wood
  const stain = props.board.stain ? props.board.stain : props.stain
  const width = props.board.width_in_cm ? props.board.width_in_cm : props.width_in_cm
  const length = props.board.length_in_cm ? props.board.length_in_cm : props.length_in_cm
  const thickness = props.board.thickness_in_cm ? props.board.thickness_in_cm : props.thickness_in_cm
  const pictureURL = props.board.picture_url ? props.board.picture_url : props.picture_url
  const price = props.board.price_in_cad ? props.board.price_in_cad : props.price_in_cad

  return (
    <div
      className="w-full flex justify-between items-center py-1 px-4 m-2 border border-gray-200 bg-white rounded-lg shadow-md"
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
          buttonText={'-'}
          onClick={() =>
            props.quantity > 1
              ? changeInStockItemsInCartOnClick(-1, props.board.id)
              : null
          }
        />
        <span>{props.quantity}</span>
        <PrimaryButton
          buttonText={'+'}
          onClick={() =>
            props.quantity < 100
              ? changeInStockItemsInCartOnClick(1, props.board.id)
              : null
          }
        />
        ${price} CAD
      </span>
    </div>
  )
}
