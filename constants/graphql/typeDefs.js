import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    woods(first: Int = 25, skip: Int = 0): [Wood!]!
    stains(first: Int = 25, skip: Int = 0): [Stain!]!
    boards(first: Int = 25, skip: Int = 0): [Board!]!
    board(id: ID!): Board!
    reviews(first: Int = 25, skip: Int = 0): [Review!]!
  }

  type Mutation {
    addOrderToCart(userId: ID!, boardId: ID!, quantity: Int!) : ItemOrder
  }

  type ItemOrder {
    id: ID!
    order_id: ID! 
    board_id: ID!
    quantity: Int!
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
`
export default typeDefs
