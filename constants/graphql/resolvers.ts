import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
})

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
    },
    order: (_parent, args, _context) => {
      return db
        .select('*')
        .from('orders')
        .where({ id: args.id })
        .first()
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

  Order: {
    in_stock_order_items: (order, args, _context) => {
      return db
        .select('*')
        .from('in_stock_order_items')
        .where({ order_id: order.id })
        .orderBy('id', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    },
    custom_order_items: (order, args, _context) => {
      return db
        .select('*')
        .from('custom_order_items')
        .where({ order_id: order.id })
        .orderBy('id', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    }
  },

  In_Stock_Order_Item: {
    board: (inStockOrderItem, args, _context) => {
      return db
        .select('*')
        .from('boards')
        .where({ id: inStockOrderItem.board_id })
        .first()
    }
  },

  Custom_Order_Item: {
    stain: (customOrderItem, args, _context) => {
      return db
        .select('*')
        .from('stains')
        .where({ id: customOrderItem.stain_id })
        .first()
    },
    wood: (customOrderItem, args, _context) => {
      return db
        .select('*')
        .from('woods')
        .where({ id: customOrderItem.wood_id })
        .first()
    }
  },

  Mutation: {
    changeInStockItemsInCart: (_parent, { userId, boardId, quantity }, _context) => {
      // get order id so you know which order to check
      return db.select('id')
        .from('orders')
        .where({ user_id: userId, placed: null })
        .pluck('id')
        .then(orderId => {
          // check order if item is already in it
          return db.select('*')
            .from('in_stock_order_items')
            .where({
              order_id: parseInt(orderId),
              board_id: parseInt(boardId)
            })
            .first()
            .then(
              exisitingOrder => {
                // if it is then update quantity
                if (exisitingOrder) {
                  return db('in_stock_order_items')
                    .where({
                      order_id: parseInt(orderId),
                      board_id: parseInt(boardId)
                    })
                    .update({ quantity: quantity + exisitingOrder.quantity })
                    .returning('id')
                    .then(inStockOrderId => {
                      return {
                        id: inStockOrderId[0],
                        board_id: parseInt(boardId),
                        order_id: parseInt(orderId),
                        quantity: quantity + exisitingOrder.quantity
                      }
                    })
                } else {
                  // if not add item to order
                  return db('in_stock_order_items')
                    .insert({
                      order_id: parseInt(orderId),
                      board_id: parseInt(boardId),
                      quantity: quantity
                    })
                    .returning('id')
                    .then(inStockOrderId => {
                      return {
                        id: inStockOrderId[0],
                        board_id: boardId,
                        order_id: parseInt(orderId),
                        quantity: quantity
                      }
                    })
                }
              }
            )
        })
    },

    addNewAppUser: (_parent, { authUserId, email, nickname }, _context) => {
      return db.select('*')
        .from('app_users')
        .where({ auth_user_id: authUserId })
        .first()
        .then(app_user => {
          // if app_user doesnt' exist then create one
          if (app_user && app_user.auth_user_id === authUserId) return app_user
          return db('app_users')
            .insert({
              auth_user_id: authUserId,
              email: email,
              nickname: nickname
            })
            .returning('*')
            .then(newAppUser => {
              return newAppUser[0]
            })
        })
    }
  }
}

export default resolvers
