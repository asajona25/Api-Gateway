const clientResolver = require('./client_resolver');
const productResolver = require('./product_resolver');
const userResolver = require('./users_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(clientResolver, productResolver, userResolver);

module.exports = resolvers;