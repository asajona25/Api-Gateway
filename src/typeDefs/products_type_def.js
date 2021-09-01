const { gql } = require('apollo-server');

const productsTypeDefs = gql `
    type Product {
        id: Int!
        productName: String!
        category: String
        stock: Int
        price: String!
    }

    type StatusC{
        Status: String
    }

    extend type Query {
        productById(productId: Int!): Product!
    }

    extend type Query {
        productAll: [Product]!
    }

    input ProductAddInput {
        productName: String!
        category: String
        stock: Int
        price: String!
    }

    input ProductUpdateInput {
        id: Int!
        productName: String!
        category: String
        stock: Int
        price: String!
    }

    extend type Mutation {
        productAdd(productAdd: ProductAddInput!): StatusC
    }

    extend type Mutation {
        productDelete(id: Int!): StatusC
    }

    extend type Mutation {
        productUpdate(product: ProductUpdateInput!): Product!
    }
    
`;

module.exports = productsTypeDefs; 
