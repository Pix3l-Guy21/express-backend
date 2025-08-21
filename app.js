import express from 'express';
import sequelize from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import cartItemRoutes from './routes/cartItemRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import orderItemRoutes from './routes/orderItemRoutes.js';
import productImageRoutes from './routes/productImageRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();
app.use(express.json());

try {
    await sequelize.authenticate();
    console.log("Database connected");

    await sequelize.sync({alter: true});
    console.log("Database synced");
} catch (error) {
    console.log("Connection error: ", error);
}

app.get('/', (req, res) => {
    res.send("Hello World")});
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/cartitem', cartItemRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/orderitem', orderItemRoutes);
app.use('/api/productimage', productImageRoutes);
app.use('/api/category', categoryRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
})