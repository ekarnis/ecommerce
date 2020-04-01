import gql from 'graphql-tag'

const ADD_TO_CART_MUTATION = gql`
mutation AddOrderToCart($boardId: ID!, $quantity: Int!) {
    addOrderToCart(userId: 1, boardId: $boardId, quantity: $quantity) {
      id
    }
  }
`

export default ADD_TO_CART_MUTATION 