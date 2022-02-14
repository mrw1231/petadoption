const Item = require('../../models/item');
const mongoose = require('mongoose');
const db = mongoose.connection;

module.exports = {
  index,
  show,
  create,
};

function create(req, res) {
  console.log(req.body);
  db.collection('items').insertOne(req.body, (err, data) => {
    if(err) return console.log(err);
    res.send(('saved to db: ' + data));
  })
};

async function index(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}
