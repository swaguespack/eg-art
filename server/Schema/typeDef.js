const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        artCount: Int
        savedArt: [Art]
    }
    type Art {
        description: String
        artId: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
      }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addArt(artId: String! image:String, link:String): User
        removeArt(artId:String!): User
    }   
`;

module.exports = typeDefs;