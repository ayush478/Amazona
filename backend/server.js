const express = require('express');

const products = require('./data/products');
const app = express();

app.get('/', (req, res) => {
  res.send('ayush');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
    const product= products.find(p=>p._id===req.params.id)
  res.json(product);
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
