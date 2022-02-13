require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Pet = require('./models/pet');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Dogs', sortOrder: 10},
    {name: 'Cats', sortOrder: 20},
    {name: 'Other', sortOrder: 30},
  ]);

  await Pet.deleteMany({});
  const pets = await Pet.create([
    {name: 'Wagner', category: categories[0], price: 50},
    {name: 'Tabby', category: categories[1], price: 10},
    {name: 'Gerbil', category: categories[2], price: 3.95},
  ]);

  console.log(pets)

  process.exit();

})();