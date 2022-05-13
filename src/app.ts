import express from 'express';
import routeProduct from './routes/product.route';

const app = express();

app.use(express.json());

app.use('/products', routeProduct);

export default app;
