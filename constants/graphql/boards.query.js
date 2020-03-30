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
        length_in_cm
        picture_url
        price_in_cad
        stock
        thickness_in_cm
        width_in_cm
    }
  }
`

export default BOARDS_QUERY
