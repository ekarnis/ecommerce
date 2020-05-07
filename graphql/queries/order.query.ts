import gql from 'graphql-tag'

const ORDERS_QUERY = gql`
  query Orders($appUserId: ID!, $getPlacedOrders: Boolean!) {
    orders(appUserId: $appUserId, getPlacedOrders: $getPlacedOrders) {
      id
      user_id
      address_id
      placed
      tracking_code
      final_cost
      notes
      in_stock_order_items {
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
          length_in_cm
          picture_url
          price_in_cad
          stock
          thickness_in_cm
          width_in_cm
        }
      }
      custom_order_items {
        id
        quantity
        stain {
          name
        }
        wood {
          name
        }
        length_in_cm
        price_in_cad
        thickness_in_cm
        width_in_cm
      }
    }
  }
`

export default ORDERS_QUERY
