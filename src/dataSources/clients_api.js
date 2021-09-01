const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ClientsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.clientsApiUrl;
  }

  async clientAll(){
    return await this.get('/api/clientes/');
  }

  async clientById(clientId){
    return await this.get(`/api/cliente/${clientId}`);
  }

  async clientAdd(clientAdd) {
    return await this.post(`/api/add`, clientAdd);
  }

  async clientUpdate(client) {
    return await this.put(`/api/update`, client);
  }

  async clientDelete(id) {
    return await this.delete(`/api/delete/${id}/`, id);
  }
  
}

module.exports = ClientsAPI;