import gql from 'graphql-tag'

const WOODS_QUERY = gql`
  query Woods {
      woods {
        id
        name
        picture_url
    }
  }
`

export default WOODS_QUERY
