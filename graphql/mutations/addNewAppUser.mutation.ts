import gql from 'graphql-tag'

const ADD_NEW_APP_USER = gql`
  mutation AddNewAppUser(
    $auth0UserId: ID!
    $email: String!
    $name: String!
  ) {
    addNewAppUser(
      auth0UserId: $auth0UserId
      email: $email
      name: $name
    ) {
      id
      auth0_user_id
      email
      name
    }
  }
`

export default ADD_NEW_APP_USER
