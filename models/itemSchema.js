const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: {type: String, required: true},
  category: {type: Schema.Types.ObjectId, ref:'Category'},
  price: {type: Number, required: true, default: 0},
  image: {type: String, default: 'https://i.imgur.com/gxcuYgd.jpg'},
}, {
  timestamps: true
});

module.exports = itemSchema;