import gql from 'graphql-tag'

const ORDERS_QUERY = gql`
  query Orders($appUserId: ID!, $getPlacedOrders: Boolean!) {
    orders(appUserId: $appUserId, getPlacedOrders: $getPlacedOrders) {
      id
      userId
      addressId
      placed
      trackingCode
      finalCost
      notes
      inStockOrderItems {
        id
        quantity
        board {
          id
          stain {
            name
          }
          wood {
            name
          }
          lengthInCm
          pictureUrl
          priceInCad
          stock
          thicknessInCm
          widthInCm
        }
      }
      customOrderItems {
        id
        quantity
        stain {
          name
        }
        wood {
          name
        }
        lengthInCm
        priceInCad
        thicknessInCm
        widthInCm
      }
    }
  }
`

export default ORDERS_QUERY
