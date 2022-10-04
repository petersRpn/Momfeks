import expressAsyncHandler from "express-async-handler";
import Order from "../model/orderModel.js";

export const postOrder = expressAsyncHandler(async (req, res) => {
if (req.body.orderItems.length === 0) {
    res.status(400).send({ message: 'Cart is empty' });
} else {
    const order = new Order({
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    itemsPrice: req.body.itemsPrice,
    shippingPrice: req.body.shippingPrice,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
    user: req.user._id,
    });
    const createdOrder = await order.save();
    res
    .status(201)
    .send({ message: 'New Order Created', order: createdOrder });
}
});

export const getOrder = () => expressAsyncHandler(async(req, res) => {

  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (order) {
      res.send(order);
      console.log('line 29', order)
    }
    
} catch (error) {
  res.status(404).send({ message: 'Order Not Found' });
}
  });

export const putOrder = () => expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.send({ message: 'Order Paid', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  });

  export const getMineOrder = () => expressAsyncHandler(async (req, res) => {
      const orders = await Order.find({ user: req.user._id });
      res.send(orders);
    });
