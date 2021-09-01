const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProductsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.productsApiUrl;    
  }

  async productById(productId) {
    return await this.get(`/api/v1/product/${productId}`);
  }

  async productAll(){
    return await this.get(`/api/v1/products`);
  }

  async productAdd(productAdd) {
    //productAdd = new Object(JSON.parse(JSON.stringify(productAdd)));
    return await this.post(`/api/v1/add`, productAdd);
  }

  async productDelete(id) {
    return await this.delete(`/api/v1/delete/${id}/`, id);
  }

  async productUpdate(product) {
    return await this.put(`/api/v1/update`, product);
  }

}

module.exports = ProductsAPI;
