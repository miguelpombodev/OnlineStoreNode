import express from 'express';
import productsRoute from './Routes/products.route';
import usersRoute from './Routes/users.route';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', usersRoute);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
