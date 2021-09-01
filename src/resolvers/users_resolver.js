const usersResolver = {
    Mutation: {
        authenticate: (_, { credentials }, { dataSources }) => dataSources.usersAPI.authRequest(credentials),
        //refreshToken: (_, { refresh }, { dataSources }) => dataSources.usersAPI.refreshToken(refresh),
        userCreate: (_, {data}, { dataSources }) => dataSources.usersAPI.userCreate(data),
    }
};

module.exports = usersResolver;