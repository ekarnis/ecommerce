import gql from 'graphql-tag'

const ALBUMS_QUERY = gql`
  query Albums {
    albums {
        artist {
        id
        }
    }
  }
`

export default ALBUMS_QUERY
