import gql from 'graphql-tag'

const UPDATE_CUSTOM_ITEM_IN_CART_MUTATION = gql`
  mutation UpdateCustomItemInCart(
    $id: ID!
    $newQuantity: Int!
  ) {
    updateCustomItemInCart(
        id: $id
        newQuantity: $newQuantity
    ) {
        quantity
    }
  }
`

export default UPDATE_CUSTOM_ITEM_IN_CART_MUTATION
