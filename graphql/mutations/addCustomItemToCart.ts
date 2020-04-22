import gql from 'graphql-tag'

const ADD_CUSTOM_ITEM_TO_CART_MUTATION = gql`
  mutation AddCustomItemToCart(
    $userId: ID!
    $stainId: ID
    $woodId: ID
    $widthInCm: Int
    $lengthInCm: Int
    $thicknessInCm: Int
    $quantity: Int
  ) {
    addCustomItemToCart(
        userId: $userId
        stainId: $stainId
        woodId: $woodId
        widthInCm: $widthInCm
        lengthInCm: $lengthInCm
        thicknessInCm: $thicknessInCm
        quantity: $quantity
    ) {
      id
    }
  }
`

export default ADD_CUSTOM_ITEM_TO_CART_MUTATION
