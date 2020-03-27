import { ApolloServer, gql } from 'apollo-server-micro'
import Cors from 'micro-cors'
import knex from 'knex'

const typeDefs = gql`
  type Query {
    woods(first: Int = 25, skip: Int = 0): [Wood!]!
    stains(first: Int = 25, skip: Int = 0): [Stain!]!
    boards(first: Int = 25, skip: Int = 0): [Board!]!
    board(id: ID!): Board!
    reviews(first: Int = 25, skip: Int = 0): [Review!]!
  }

  type Wood {
    id: ID!
    name: String!
  }

  type Stain {
    id: ID!
    name: String!
  }

  type Board {
    id: ID!
    stain: Stain!
    wood: Wood!
    reviews(first: Int = 25, skip: Int = 0): [Review!]!
    stock: Int!
    width_in_cm: Int!
    length_in_cm: Int!
    thickness_in_cm: Int!
    price_in_usd: Int!
    picture_url: String!
    description: String!
  }

  type Review {
    id: ID!
    user_id: Int!
    board: Board!
    stars: Int!
    helpful_votes: Int!
    not_helpful_votes: Int!
    content: String!
  }
`

const resolvers = {
  Query: {
    woods: (_parent, args, _context) => {
      return db
        .select('*')
        .from('woods')
        .orderBy('name', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    },
    stains: (_parent, args, _context) => {
      return db
        .select('*')
        .from('stains')
        .orderBy('name', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    },
    boards: (_parent, args, _context) => {
      return db
        .select('*')
        .from('boards')
        .orderBy('price_in_usd', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    },
    board: (_parent, args, _context) => {
      return db
        .select('*')
        .from('boards')
        .where({ id: args.id })
        .first()
    },
    reviews: (_parent, args, _context) => {
      return db
        .select('*')
        .from('reviews')
        .orderBy('helpful_votes', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    }
  },

  Board: {
    stain: (board, args, _context) => {
      return db
        .select('*')
        .from('stains')
        .where({ id: board.stain_id })
        .first()
    },
    wood: (board, args, _context) => {
      return db
        .select('*')
        .from('woods')
        .where({ id: board.wood_id })
        .first()
    },
    reviews: (board, args, _context) => {
      return db
        .select('*')
        .from('reviews')
        .where({ board_id: board.id })
        .orderBy('helpful_votes', 'asc')
    }
  }

}

const db = knex({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
})

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { }
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
