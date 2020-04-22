import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'

import typeDefs from '../../constants/graphql/typeDefinitions'
import resolvers from '../../constants/graphql/resolvers'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {}
  }
})

const handler = apolloServer.createHandler({ path: '/api' })

export const config = {
  api: {
    bodyParser: false
  }
}

const cors = Cors({
  allowMethods: ['GET', 'POST', 'OPTIONS']
})

export default cors(handler)
