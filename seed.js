require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Dogs', sortOrder: 10},
    {name: 'Cats', sortOrder: 20},
    {name: 'Other', sortOrder: 30},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Wagner', category: categories[0], price: 50, image: 'https://i.imgur.com/nIaRaqU.jpg'},
    {name: 'Nitro', category: categories[0], price: 50, image: 'https://i.imgur.com/4iya8fW.jpg'},
    {name: 'Dexter', category: categories[0], price: 50, image: 'https://i.imgur.com/bZfhAQg.jpg'},
    {name: 'Sparky', category: categories[0], price: 50, image: 'https://i.imgur.com/bgJAg2g.jpg'},
    {name: 'William', category: categories[0], price: 50, image: 'https://i.imgur.com/0dOUVGc.jpg'},
    {name: 'Phil', category: categories[0], price: 50, image: 'https://i.imgur.com/A39k8SG.jpg'},
    {name: 'Crowley', category: categories[0], price: 50, image: 'https://i.imgur.com/EnI4Xxu.jpg'},
    {name: 'Tabby', category: categories[1], price: 25, image: 'https://i.imgur.com/4axzeMY.jpg'},
    {name: 'Mittens', category: categories[1], price: 25, image: 'https://i.imgur.com/rwHrGgA.jpg'},
    {name: 'Gerbil', category: categories[2], price: 3.95},
  ]);

  console.log(items)

  process.exit();

})();