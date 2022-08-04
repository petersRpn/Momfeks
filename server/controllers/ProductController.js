import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../model/productModel.js";

export const getdbProduct = expressAsyncHandler(async(req, res) => {   
    try {
    //  await Product.remove({})
    const createdProduct = await Product.insertMany(data.products);
    res.send({createdProduct})

    } catch (error) {
        res.status(400).send({message: error.message})
    }
    
}
)

export const getProduct = (req, res) => {
    try {
        res.send(data.products);
    } catch (error) {
        res.status(404).send({ message: 'failed' });
    }
    
}

export const getProductId = (req, res) => {
    const productId = req.params.id
    const product = data.products.find(x => x.id === productId)
    try {
        res.send(product)
    } catch (error) {
        res.status(404).send({ message: 'Product Not Found' });
    }
}
