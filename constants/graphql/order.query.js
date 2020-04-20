import gql from 'graphql-tag'

const ORDER_QUERY = gql`
  query Order($order_id: ID!) {
    order(id: $order_id) {
      id
      user_id
      address_id
      placed
      tracking_code
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

export default ORDER_QUERY
