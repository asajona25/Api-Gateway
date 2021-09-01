const clientResolver = {
    Query: {
        clientById: (_, {clientId}, { dataSources, userIdToken}) => 
        {
            if(userIdToken) 
                return dataSources.clientsAPI.clientById(clientId)
            else
                return null
        },
        clientAll: (_, { }, { dataSources, userIdToken}) => 
        {
            if(userIdToken) 
                return dataSources.clientsAPI.clientAll()
            else
                return null
        }
    },
    Mutation: {
        clientAdd: (_, { clientAdd }, { dataSources, userIdToken }) => //dataSources.clientsAPI.clientAdd(clientAdd),
        {
            if(userIdToken) 
                return dataSources.clientsAPI.clientAdd(clientAdd)
            else
                return null
        },
        clientUpdate: (_, { client }, { dataSources, userIdToken }) => //dataSources.clientsAPI.clientUpdate(client)
        {
            if(userIdToken) 
                return dataSources.clientsAPI.clientUpdate(client)
            else
                return null
        },
        clientDelete: (_, { id }, { dataSources, userIdToken }) => //dataSources.clientsAPI.clientDelete(id),
        {
            if(userIdToken) 
                return dataSources.clientsAPI.clientDelete(id)
            else
                return null
        }
    }
};

module.exports = clientResolver;