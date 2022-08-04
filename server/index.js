import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";

const app = express();
 const url ="mongodb://127.0.0.1:27017/momfeks";
try {
    mongoose.connect(process.env.MONGODB_URL || url, {useNewUrlParser: true, useUnifiedTopology: true})
} catch (error) {
   console.log(error.message)
}

mongoose.connection.on('connected', () => console.log('mongodb connected'))
mongoose.connection.on('error', (error) => console.log(error))
app.use('/api/products', ProductRouter)
app.use('/api/users', userRouter )
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})