import gql from 'graphql-tag'

const STAINS_QUERY = gql`
  query Stains {
      stains {
        id
        name
    }
  }
`

export default STAINS_QUERY
