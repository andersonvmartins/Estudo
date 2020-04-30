const ProductsModel = require('../models/products');

const transformer = prod => ({
    type: 'products',
    id: prod.id,
    attributes: {
        name: prod.name,
        price: prod.price
    },
    links: {
        self: `/api/v1/products/${prod.id}`
    }
});

const remove = async (req, h) => {
/*     console.log(req.params.id);
    return 'removendo...'; */
    await  ProductsModel.findByIdAndDelete({_id: req.params.id});
    //return `Product Id: ${req.params.id} deleted.`;
    return h.response().code(204);

};

const find = async (req, h) => {
    //const product = await  ProductsModel.findOne({_id: req.params.id})
    const product = await  ProductsModel.findById(req.params.id);
    return h.response({data: transformer(product)}).code(200);
}


const getAll = async (request, h) => {

    const products = await ProductsModel.find({});
    return { data: products.map(transformer)};

    //return '<h2>Todos os Produtos!</h2>';
}

// receberá os dados via HTTP com o verbo POST
// async: indicando que a Arrow Function é assincrona
// por causa do await
const save = async (req, h) => { 
    const {name, price} = req.payload
   // console.log(req.payload.name);
    const product = new ProductsModel;
    product.name = name;
    product.price = price;
    
    await product.save();

    // padrões do Json
    //return h.response(product).code(201);

    //boas práticas Json
    //return h.response({data: product}).code(201);

    return h.response(transformer(product)).code(201);
    //return '<h2>Salvando...</h2>'
}


module.exports = {getAll, save, remove, find};