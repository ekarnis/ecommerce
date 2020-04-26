import gql from 'graphql-tag'

const BOARD_QUERY = gql`
  query Board($board_id: ID!) {
    board(id:$board_id) {
        id
        stain{
            name
        }
        wood{
            name
        }
        description
        length_in_cm
        picture_url
        price_in_cad
        reviews {
          id
          user_id
          stars
          helpful_votes
          not_helpful_votes
          content
        }
        stock
        thickness_in_cm
        width_in_cm
        
    }
  }
`

export default BOARD_QUERY
