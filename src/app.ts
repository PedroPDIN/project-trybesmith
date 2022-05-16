import express from 'express';
import routeProduct from './routes/product.route';
import routeUser from './routes/user.route';
import routeOrder from './routes/order.route';
import routeLogin from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/products', routeProduct);
app.use('/users', routeUser);
app.use('/orders', routeOrder);
app.use('/login', routeLogin);

export default app;
