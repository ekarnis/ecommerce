import gql from 'graphql-tag'

const CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION = gql`
  mutation ChangeInStockItemsInCart(
    $userId: ID!
    $boardId: ID!
    $quantity: Int!
  ) {
    changeInStockItemsInCart(
      userId: $userId
      boardId: $boardId
      quantity: $quantity
    ) {
      id
    }
  }
`

export default CHANGE_IN_STOCK_ITEMS_IN_CART_MUTATION
