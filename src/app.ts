import express from 'express';
import routeProduct from './routes/product.route';
import routeUser from './routes/user.route';

const app = express();

app.use(express.json());

app.use('/products', routeProduct);
app.use('/users', routeUser);

export default app;
