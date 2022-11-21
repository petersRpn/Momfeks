import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";
import dotenv from 'dotenv';
import orderRouter from "./router/orderRouter.js";
import path from 'path';


dotenv.config()

const app = express();
 const url ="mongodb://127.0.0.1:27017/momfeks";
 app.use(express.json());
 app.use(express.urlencoded({extended: true}))
try {
    mongoose.connect(process.env.MONGODB_URL || url, {useNewUrlParser: true, useUnifiedTopology: true})
} catch (error) {
   console.log(error.message)
}

mongoose.connection.on('connected', () => console.log('mongodb connected'))
mongoose.connection.on('error', (error) => console.log(error))
app.use('/api/products', ProductRouter);
app.use('/api/users', userRouter );
app.use('/api/orders', orderRouter )
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
  });
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
);

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})