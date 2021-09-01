const { gql } = require('apollo-server');

const usersTypeDefs = gql `

    type User {
        username: String!
        name: String!
        apellido: String!
        email: String!
        password: String!
    }

    type Tokens {
        token: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }
    
    type Mutation {
        authenticate(credentials: CredentialsInput!): Tokens!
    }

    input DataInput{
        username: String!
        name: String!
        apellido: String!
        email: String!
        password: String!
    }

    extend type Mutation {
        userCreate(data: DataInput!): User!
    }
`;

module.exports = usersTypeDefs;