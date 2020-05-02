import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    addresses(first: Int = 25, skip: Int = 0): [Address!]!
    address(id: ID!): Address!
    appUser(id: ID!): AppUser!
    woods(first: Int = 25, skip: Int = 0): [Wood!]!
    stains(first: Int = 25, skip: Int = 0): [Stain!]!
    boards(first: Int = 25, skip: Int = 0): [Board!]!
    board(id: ID!): Board!
    reviews(first: Int = 25, skip: Int = 0): [Review!]!
    order(appUserId: ID!, getPlacedOrders: Boolean!): [Order]!
  }

  type Mutation {
    changeInStockItemsInCart(userId: ID!, boardId: ID!, quantity: Int!): ItemOrder
    addCustomItemToCart(
        userId: ID!,
        stainId: ID,
        woodId: ID,
        widthInCm: Int,
        lengthInCm: Int,
        thicknessInCm: Int,
        quantity: Int
      ): CustomItemInCart
    updateCustomItemInCart(id: ID!, newQuantity: Int!): CustomItemInCart
    addNewAppUser(auth0UserId: ID!, email: String!, name: String!): AppUser,
    createAddress(
      app_user_id: Int!,
      full_name: String!,
      line_1: String!,
      line_2: String,
      city: String!,
      region: String!,
      postal_code: String!,
      phone_number: String!,
      instructions: String
    ): Address,
    updateAddress(
      id: ID!,
      full_name: String,
      line_1: String,
      line_2: String,
      city: String,
      region: String,
      postal_code: String,
      phone_number: String,
      instructions: String
    ): Address
  }

  type ItemOrder {
    id: ID!
    order_id: ID!
    board_id: ID!
    quantity: Int!
  }

  type CustomItemInCart{
    id: ID!
    order_id: ID
    quantity: Int
  }

  type Wood {
    id: ID!
    name: String!
    picture_url: String!
  }

  type Stain {
    id: ID!
    name: String!
    picture_url: String!
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
    price_in_cad: Int!
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

  type Order {
    id: ID!
    user_id: Int!
    address_id: Int
    placed: String
    tracking_code: String
    notes: String
    final_cost: Int
    in_stock_order_items(first: Int = 25, skip: Int = 0): [In_Stock_Order_Item]
    custom_order_items(first: Int = 25, skip: Int = 0): [Custom_Order_Item]
  }

  type In_Stock_Order_Item {
    id: ID!
    board: Board!
    quantity: Int!
  }

  type Custom_Order_Item {
    id: ID!
    stain: Stain!
    wood: Wood!
    width_in_cm: Int!
    length_in_cm: Int!
    thickness_in_cm: Int!
    price_in_cad: Int!
    quantity: Int!
  }

  type AppUser {
    id: ID!
    auth0_user_id: ID!
    email: String!
    name: String!
    addresses: [Address]
  }

  type Address {
    id: ID!
    full_name: String!
    line_1: String!
    line_2: String
    city: String!
    region: String!
    postal_code: String!
    phone_number: String!
    instructions: String
    }

`
export default typeDefs
