import { ApolloServer, gql } from 'apollo-server-micro'
import Cors from 'micro-cors'
import knex from 'knex'
import DataLoader from 'dataloader'

const typeDefs = gql`
  type Query {
    albums(first: Int = 25, skip: Int = 0): [Album!]!
  }

  type Artist {
    id: ID!
    name: String!
    url: String!
    albums(first: Int = 25, skip: Int = 0): [Album!]!
  }

  type Album {
    id: ID!
    name: String!
    year: String!
    artist: Artist!
  }
`

const resolvers = {
  Query: {
    albums: (_parent, args, _context) => {
      return db
        .select('*')
        .from('albums')
        .orderBy('year', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    }
  },

  Album: {
    id: (album, _args, _context) => album.id,
    artist: (album, _args, { loader }) => {
      return loader.artist.load(album.artist_id)
    }
  },

  Artist: {
    id: (artist, _args, _context) => artist.id,
    albums: (artist, args, _context) => {
      return db
        .select('*')
        .from('albums')
        .where({ artist_id: artist.id })
        .orderBy('year', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    }
  }
}

const db = knex({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
})

const loader = {
  artist: new DataLoader(ids =>
    db
      .table('artists')
      .whereIn('id', ids)
      .select()
      .then(rows => ids.map(id => rows.find(row => row.id === id)))
  )
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { loader }
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
