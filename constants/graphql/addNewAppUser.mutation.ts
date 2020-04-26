import gql from 'graphql-tag'

const ADD_NEW_APP_USER = gql`
  mutation AddNewAppUser(
    $authUserId: String!
    $email: String!
    $nickname: String
  ) {
    addNewAppUser(
      authUserId: $authUserId
      email: $email
      nickname: $nickname
    ) {
      id
      auth_user_id
      email
      nickname
    }
  }
`

export default ADD_NEW_APP_USER
