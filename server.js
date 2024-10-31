require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const order = require('./order-model');      // Modelo Order

const PORT = 3000;
const app = express();  // Já configurado


// Middleware para processar JSON
app.use(express.json());

// Rota POST para "/order"
app.post('/order', async (req, res) => {
  const orderData = req.body;  // Pega os dados do pedido do body
  try {
    const newOrder = await order.create(orderData);  // Insere os dados no MongoDB
    res.status(201).json({ message: 'Order created successfully!', data: newOrder });
  } catch (error) {
    console.error(`Error while creating order: ${error}`)
    res.status(500).json({ message: 'Error while creating order', data: [] });
  }
});

// Iniciar o servidor
app.listen(PORT, async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log(`Server listenning at localhost:${PORT}`);
});
