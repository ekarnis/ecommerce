import gql from 'graphql-tag'

const BOARDS_QUERY = gql`
  query Boards {
    boards {
        id
        stain{
            name
        }
        wood{
            name
        }
        stock
        width_in_cm
        length_in_cm
        thickness_in_cm
        price_in_usd
        picture_url
    }
  }
`

export default BOARDS_QUERY
