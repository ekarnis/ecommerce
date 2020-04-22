
import { useMutation } from '@apollo/react-hooks'

import CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION from '../graphql/mutations/changeInStockItemsInCart'
import UPDATE_CUSTOM_ITEM_IN_CART_MUTATION from '../graphql/mutations/updateCustomItemInCart'

import PrimaryButton from '../components/PrimaryButton'

export default props => {
  const [changeInStockItemsInCart] = useMutation(CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION)
  const [updateCustomItemsInCart] = useMutation(UPDATE_CUSTOM_ITEM_IN_CART_MUTATION)

  const changeInStockItemsInCartOnClick = (newQuantity, boardId) => {
    changeInStockItemsInCart({
      variables: {
        userId: 1,
        boardId: boardId,
        quantity: newQuantity
      }
    }).then(() => props.refetch())
  }

  const updateCustomItemsInCartOnClick = (newQuantity, customOrderId) => {
    updateCustomItemsInCart({
      variables: {
        id: customOrderId,
        newQuantity: newQuantity
      }
    }).then(() => props.refetch())
  }

  // translation so it'll work with custom and in stock boards

  const wood = props.wood ? props.wood : props.board.wood
  const stain = props.stain ? props.stain : props.board.stain
  const width = props.width_in_cm ? props.width_in_cm : props.board.width_in_cm
  const length = props.length_in_cm ? props.length_in_cm : props.board.length_in_cm
  const thickness = props.thickness_in_cm ? props.thickness_in_cm : props.board.thickness_in_cm
  const price = props.price_in_cad ? props.price_in_cad : props.board.price_in_cad

  const pictureURL = props.board ? props.board.picture_url : '/board.jpg'

  return (
    <div
      className="w-full flex justify-between items-center py-1 px-4 m-2 border border-gray-200 bg-white rounded-lg shadow-md"
    >
      <img className="m-1 w-32" src={pictureURL}></img>
      <span className="flex items-center">
        <span className="text-3xl font-bold text-indigo-500 mr-4">
          {props.board ? null : 'Custom: '} {wood.name}
        </span>
        {stain.name}, &nbsp;
        {width}cm x {length}cm x {thickness}cm
      </span>
      <span>
        <PrimaryButton
          buttonText={'-'}
          onClick={() =>
            props.quantity > 1
              ? props.board
                ? changeInStockItemsInCartOnClick(-1, props.board.id)
                : updateCustomItemsInCartOnClick(props.quantity - 1, props.id)
              : null
          }
        />
        <span>{props.quantity}</span>
        <PrimaryButton
          buttonText={'+'}
          onClick={() =>
            props.board
              ? changeInStockItemsInCartOnClick(1, props.board.id)
              : updateCustomItemsInCartOnClick(props.quantity + 1, props.id)
          }
        />
        ${price} CAD
      </span>
    </div>
  )
}
