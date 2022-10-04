import mongoose from 'mongoose'
const {Schema} = mongoose;

const productSchema = new Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    price:{ type: Number, required: true},
    countInStock:{type: Number},
    rating: {type: Number},
    numReview: {type: Number, required: true},
},
{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

export default Product;