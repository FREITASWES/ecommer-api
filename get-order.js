const order = require('./get-order');

const PORT = 3000;
const app = express();

app.get('/get-order', async (req, rest) => {
    try{
        const order = await order.find(); //aqui seria para buscar as orders do MongoDB
        rest.status(200).json({ message: 'Orders retrieved successfully!', data: order});
    } catch (error) {
        console.error(`Error while retrieving orders: ${error}`);
        rest.status(500).json({ message: 'Error while retrieving orders', data: [] });
    }
});