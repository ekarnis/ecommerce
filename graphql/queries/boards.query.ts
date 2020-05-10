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
        lengthInCm
        pictureUrl
        priceInCad
        stock
        thicknessInCm
        widthInCm
    }
  }
`

export default BOARDS_QUERY
