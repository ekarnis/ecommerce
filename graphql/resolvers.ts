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
    },
    addresses: (_parent, args, _context) => {
      return db
        .select('*')
        .from('addresses')
        .orderBy('id', 'asc')
        .limit(Math.min(args.first, 50))
        .offset(args.skip)
    },
    address: (_parent, args, _context) => {
      return db
        .select('*')
        .from('addresses')
        .where({ id: args.id })
        .first()
    },
    appUser: (_parent, args, _context) => {
      return db
        .select('*')
        .from('app_users')
        .where({ id: args.id })
        .first()
    }
  },

  AppUser: {
    addresses: (appUser, args, _context) => {
      return db
        .select('*')
        .from('addresses')
        .where({ app_user_id: appUser.id })
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
    addCustomItemToCart: (_parent, {
      userId, stainId, woodId, widthInCm, lengthInCm, thicknessInCm, quantity
    }, _context) => {
      // get order id so you know which order to check
      return db.select('id')
        .from('orders')
        .where({ user_id: userId, placed: null })
        .pluck('id')
        .then(orderId => {
          // check order if item is already in it
          return db.select('*')
            .from('custom_order_items')
            .where({
              order_id: parseInt(orderId),
              stain_id: parseInt(stainId),
              wood_id: parseInt(woodId),
              width_in_cm: widthInCm,
              length_in_cm: lengthInCm,
              thickness_in_cm: thicknessInCm
            })
            .first()
            .then(
              exisitingOrder => {
                // if it is then update quantity
                if (exisitingOrder) {
                  return db('custom_order_items')
                    .where({
                      order_id: parseInt(orderId),
                      stain_id: parseInt(stainId),
                      wood_id: parseInt(woodId),
                      width_in_cm: widthInCm,
                      length_in_cm: lengthInCm,
                      thickness_in_cm: thicknessInCm
                    })
                    .update({ quantity: quantity + exisitingOrder.quantity })
                    .returning('id')
                    .then(customOrderId => {
                      return {
                        id: customOrderId[0],
                        order_id: orderId,
                        quantity: quantity + exisitingOrder.quantity
                      }
                    })
                } else {
                  // if not add item to order
                  return db('custom_order_items')
                    .insert({
                      order_id: parseInt(orderId),
                      stain_id: parseInt(stainId),
                      wood_id: parseInt(woodId),
                      width_in_cm: widthInCm,
                      length_in_cm: lengthInCm,
                      thickness_in_cm: thicknessInCm,
                      price_in_cad: 1, // TODO make function to determine this
                      quantity: 1
                    })
                    .returning('id')
                    .then(customOrderId => {
                      return {
                        id: customOrderId[0],
                        order_id: orderId,
                        quantity: quantity
                      }
                    })
                }
              }
            )
        })
    },
    updateCustomItemInCart: (_parent, { id, newQuantity }, _context) => {
      return db('custom_order_items')
        .where({
          id: parseInt(id)
        })
        .update({ quantity: newQuantity })
        .returning('quantity')
        .then(quantity => {
          return {
            id: id,
            quantity: quantity[0]
          }
        })
    },
    addNewAppUser: (_parent, { auth0UserId, email, name }, _context) => {
      return db.select('*')
        .from('app_users')
        .where({ auth0_user_id: auth0UserId })
        .first()
        .then(app_user => {
          // if app_user doesn't exist then create one
          if (app_user && app_user.auth0_user_id === auth0UserId) return app_user
          return db('app_users')
            .insert({
              auth0_user_id: auth0UserId,
              email: email,
              name: name
            })
            .returning('*')
            .then(newAppUser => {
              return newAppUser[0]
            })
        })
    },
    createAddress: (_parent, {
      app_user_id,
      full_name,
      line_1,
      line_2,
      city,
      region,
      postal_code,
      phone_number,
      instructions
    }, _context) => {
      return db('addresses')
        .insert({
          app_user_id,
          full_name,
          line_1,
          line_2,
          city,
          region,
          postal_code,
          phone_number,
          instructions
        })
        .returning('*')
        .then(newAddress => {
          return newAddress[0]
        })
    },
    updateAddress: (_parent, {
      id,
      full_name,
      line_1,
      line_2,
      city,
      region,
      postal_code,
      phone_number,
      instructions
    }, _context) => {
      return db('addresses')
        .where({
          id: parseInt(id)
        })
        .update({
          full_name: full_name,
          line_1: line_1,
          line_2: line_2,
          city: city,
          region: region,
          postal_code: postal_code,
          phone_number: phone_number,
          instructions: instructions
        })
        .returning('*')
        .then(updatedAddress => {
          return {
            id: updatedAddress[0].id,
            full_name: updatedAddress[0].full_name,
            line_1: updatedAddress[0].line_1,
            line_2: updatedAddress[0].line_2,
            city: updatedAddress[0].city,
            region: updatedAddress[0].region,
            postal_code: updatedAddress[0].postal_code,
            phone_number: updatedAddress[0].phone_number,
            instructions: updatedAddress[0].instructions
          }
        })
    }
  }
}

export default resolvers
