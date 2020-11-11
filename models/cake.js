const mongoose = require('mongoose');
const collection = 'cakes';

let Cake = mongoose.model('Cake', {
  name: { type: String },
  price: { type: Number },
  flavors: [{ type: String }]
}, collection);

module.exports = { Cake };