const { Product } = require('../models');

const productData = [
  {
    product_name: 'ABC Gaming Headset',
    price: 19.99,
    stock: 12,
    category_id: 1,
  },
  {
    product_name: 'XYZ Video Game',
    price: 60.00,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: 'Cool Dad Hat',
    price: 28.99,
    stock: 29,
    category_id: 4,
  },
  {
    product_name: 'Purple Scarf',
    price: 18.99,
    stock: 80,
    category_id: 3,
  },
  {
    product_name: 'PS5',
    price: 499.99,
    stock: 77,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
