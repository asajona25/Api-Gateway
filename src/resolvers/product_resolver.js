const productResolver = {
    Query: {
        productById: (_, { productId }, {dataSources, userIdToken}) => //dataSources.productsAPI.productById(productId),
        {
            if(userIdToken) 
                return dataSources.productsAPI.productById(Id)
            else
                return null
        },
        productAll: (_, { }, {dataSources, userIdToken}) => //{return dataSources.productsAPI.productAll()}
        {
            if(userIdToken) 
                return dataSources.productsAPI.productAll()
            else
                return null
        }
    },
    Mutation: {
        productAdd: (_, { productAdd }, { dataSources, userIdToken }) => //dataSources.productsAPI.productAdd(productAdd),
        {
            if(userIdToken) 
                return dataSources.productsAPI.productAdd(productAdd)
            else
                return null
        },
        productDelete: (_, { id }, { dataSources, userIdToken }) => //dataSources.productsAPI.productDelete(id),
        {
            if(userIdToken) 
                return dataSources.productsAPI.productDelete(id)
            else
                return null
        },
        productUpdate: (_, { product }, { dataSources, userIdToken }) => //dataSources.productsAPI.productUpdate(product)
        {
            if(userIdToken) 
                return dataSources.productsAPI.productUpdate(product)
            else
                return null
        }
    }

};

module.exports = productResolver;