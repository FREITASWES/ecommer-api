const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderId: Number,
  orderDate: Date,
  orderStatus: String,
  clientName: String,
  clientEmail: String,
  orderValue: Number,
  shippingValue: Number,
  address: {
    cep: Number,
    street: String
  },
  paymentMethod: String,
  items: [
    {
      itemId: Number,
      itemDescription: String,
      itemValue: Number,
      itemQuantity: Number,
      discount: Number
    }
  ]
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
