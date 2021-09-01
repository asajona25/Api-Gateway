const { gql } = require('apollo-server');

const clientsTypeDefs = gql `
    type Client {
        id: String!
        nombres: String!
        apellidos: String!
        identificacion: String!
        correo: String!
        puntos: Int
    }

    input ClientAddInput {
        nombres: String!
        apellidos: String!
        identificacion: String!
        correo: String!
        puntos: Int
    }

    input ClientUpdateInput {
        id: String!
        nombres: String!
        apellidos: String!
        identificacion: String!
        correo: String!
        puntos: Int
    }

    type StatusC{
        Status: String
    }
    
    type Query {
        clientById(clientId: String!): Client!
    }

    extend type Query {
        clientAll: [Client]!
    }

    extend type Mutation {
        clientAdd(clientAdd: ClientAddInput!): StatusC
    }

    extend type Mutation {
        clientUpdate(client: ClientUpdateInput!): Client!
    }

    extend type Mutation {
        clientDelete(id: String!): StatusC
    }
`;

module.exports = clientsTypeDefs; 
