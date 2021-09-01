//Se llama al typedef (esquema) de cada submodulo
const clientsTypeDefs = require('./clients_type_def');
const productsTypeDefs = require('./products_type_def');
const usersTypeDefs = require('./users_type_defs');

//Se unen
const schemasArrays = [clientsTypeDefs, productsTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 