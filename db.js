const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CakeShop', (err) => {
  if(!err) { console.log(`Successful connection`); return; }
  console.error(`Error connecting to database: ${JSON.stringify(err, undefined, 2)}`);
});

module.exports = mongoose;