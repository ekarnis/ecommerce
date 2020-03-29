import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

const GRAPHQL_URL = 'http://localhost:3000/api'

const link = createHttpLink({
  fetch,
  uri: GRAPHQL_URL
})

// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache()
        .restore(initialState || {}),
      connectToDevTools: true // TODO: turn this off for PRODs
    })
)
