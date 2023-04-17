const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        savedArt: [Art]
    }

    type Art {
        _id: ID
        artId: Int!
        title: String
        artist: String!
        medium: String
        image: String
        link: String
        sale: Boolean
    }

    type Auth {
        token: ID!
        user: User
      }

    input inputArt {
        artId: Int!
        title: String
        artist: String!
        medium: String
        image: String
        link: String
        sale: Boolean
    }
    
      
    type Query {
        me: User
        arts(artId: Int): [Art]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveArt(artId: Int!, artist: String!, inputArt: [String]) : User
        removeArt(artId: Int!, artist: String!) : User
    }   
`;

module.exports = typeDefs;