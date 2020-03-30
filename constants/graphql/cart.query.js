import gql from 'graphql-tag'

const ADD_TO_CART_QUERY = gql`
mutation AddOrderToCart($boardId: ID!, $quantity: Int!) {
    addOrderToCart(boardId: $boardId, quantity: $quantity) {
      id
    }
  }
`

export default ADD_TO_CART_QUERY