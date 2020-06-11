const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Video Games',
  },
  {
    category_name: 'Gifts for Dad',
  },
  {
    category_name: 'Video Game Consoles',
  },
  {
    category_name: 'Gifts for Mom',
  },
  {
    category_name: 'Gaming Headsets',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
