const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Art{
        _id: ID!
        title: String!
        artist: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        me: User
        arts: [Art]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth

    }   
`;

module.exports = typeDefs;