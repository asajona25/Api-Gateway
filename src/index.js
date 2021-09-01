
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ClientsAPI = require('./dataSources/clients_api');
const UsersAPI = require('./dataSources/users_api');
const ProductsAPI = require('./dataSources/products_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        clientsAPI: new ClientsAPI(),
        usersAPI: new UsersAPI(),
        productsAPI: new ProductsAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});