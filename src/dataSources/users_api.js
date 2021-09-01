const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.usersApiUrl;
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/api/user/`, credentials);
    }

    /*async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({refresh: token})));
        return await this.post(`/token/refresh/`, refresh);
    }*/

    async userCreate(data) {
        data = new Object(JSON.parse(JSON.stringify(data)));
        return await this.post(`/api/createuser/`, data);
    }

}

module.exports = UsersAPI;