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
    {name: 'Ginny', category: categories[0], price: 50, image: 'https://i.imgur.com/Lb7Xx7Q.jpg'},
    {name: 'Doug', category: categories[0], price: 50, image: 'https://i.imgur.com/2dluFtL.jpg'},
    {name: 'Sparky', category: categories[0], price: 50, image: 'https://i.imgur.com/bgJAg2g.jpg'},
    {name: 'William', category: categories[0], price: 50, image: 'https://i.imgur.com/0dOUVGc.jpg'},
    {name: 'Colt', category: categories[0], price: 50, image: 'https://i.imgur.com/ibQwAA8.jpg'},
    {name: 'Phil', category: categories[0], price: 50, image: 'https://i.imgur.com/A39k8SG.jpg'},
    {name: 'Crowley', category: categories[0], price: 50, image: 'https://i.imgur.com/EnI4Xxu.jpg'},
    {name: 'Tabby', category: categories[1], price: 25, image: 'https://i.imgur.com/4axzeMY.jpg'},
    {name: 'Mittens', category: categories[1], price: 25, image: 'https://i.imgur.com/rwHrGgA.jpg'},
    {name: 'Sparticus', category: categories[1], price: 25, image: 'https://i.imgur.com/1lIIEko.jpg'},
    {name: 'Kitty', category: categories[1], price: 25, image: 'https://i.imgur.com/AUeTuDT.jpg'},
    {name: 'Hank', category: categories[2], price: 10, image: 'https://i.imgur.com/DZ1UZGQ.jpg'},
  ]);

  console.log(items)

  process.exit();

})();