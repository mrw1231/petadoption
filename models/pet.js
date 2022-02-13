const mongoose = require('mongoose');
require('./category');
const petSchema = require('./petSchema');

module.exports = mongoose.model('Pet', petSchema);
