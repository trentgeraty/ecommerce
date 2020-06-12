const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Zelda',
  },
  {
    tag_name: 'Candles',
  },
  {
    tag_name: 'Dad socks',
  },
  {
    tag_name: 'Dad Shoes',
  },
  {
    tag_name: 'Cool Videogame add on',
  },
  {
    tag_name: 'Super fun',
  },
  {
    tag_name: 'Smells nice',
  },
  {
    tag_name: 'Fun stuff',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
