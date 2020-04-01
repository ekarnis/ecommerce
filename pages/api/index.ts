import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import knex from 'knex'

import typeDefs from '../../constants/graphql/typeDefs'

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
        .orderBy('price_in_cad', 'asc')
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
  },

  Mutation: {
    addOrderToCart: (_parent, { userId, boardId, quantity }, _context) => {
      let a=  db.select('id')
        .from('orders')
        .where({user_id: userId, placed: null})
        .pluck('id')
        .then((id) => {
          return db('in_stock_order_items')
          .insert({order_id: parseInt(id), board_id: boardId, quantity: quantity})
          .returning('*')
        });

        console.log(getInfo(a));
        return a;
      // TODO: Ideally i would want to use (.returning('*')) only but it keeps returning null...
    },
  }
}

async function getInfo(prom) {
  try {
      await prom;
      console.log(Promise.resolve(prom));
  } catch (error) {
      console.error(error);
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
