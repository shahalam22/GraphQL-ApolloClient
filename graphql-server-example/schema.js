export const typeDefs = gql`
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
    }
`

// types can be - int, float, string, boolean, ID