const productsHandler = require('./handlers/products')

module.exports = [

    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productsHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productsHandler.find
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productsHandler.save
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productsHandler.remove,
        options: {
            cors: true
        }
    }
]