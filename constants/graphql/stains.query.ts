import gql from 'graphql-tag'

const STAINS_QUERY = gql`
  query Stains {
      stains {
        id
        name
        picture_url
    }
  }
`

export default STAINS_QUERY
