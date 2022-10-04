import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../model/productModel.js";

export const getdbProduct = expressAsyncHandler(async(req, res) => {   
    try {
    //  await Product.remove({})
    const createdProduct = await Product.insertMany(data.products);
    res.send({createdProduct});

    } catch (error) {
        res.status(400).send({message: error.message});
    }
    
}
)

export const getProduct = expressAsyncHandler(async(req, res) => {
    const products = await Product.find({})
    try {
        res.send(products);
    } catch (error) {
        res.status(404).send({ message: 'failed' });
    }
    
});

export const getProductId = expressAsyncHandler(async(req, res) => {  

    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        res.send(product);
    } catch (error) {
        res.status(404).send({ message: 'Product Not Found' });
    }
});
