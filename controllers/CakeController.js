const express = require('express');
const router = express.Router();

let { Cake } = require('../models/cake');

router.get('/', (req, res) => {
  Cake.find((err, docs ) => {
    if(!err) { res.send(docs); return; }
    console.error(`Error getting cakes list: ${JSON.stringify(err, undefined, 2)}`);
  });
});

router.post('/', (req, res) => {
  const cake = new Cake({
    name: req.body.name,
    price: req.body.price,
    flavors: req.body.flavors
  });
  cake.save((err, doc) => {
    if(!err) { res.send(doc); return; }
    console.error(`Error saving the cake ${JSON.stringify(err, undefined, 2)}`);
  });
});

router.put('/:id', (req, res) => {
  const cakeNewData = {
    name: req.body.name,
    price: req.body.price,
    flavors: req.body.flavors
  };
  Cake.findOneAndUpdate(req.params.id, {$set: cakeNewData }, { new: true }, (err, doc) => {
    if(!err) { res.send(doc); return; }
    return res.send(`Error updating cake: ${JSON.stringify(err, undefined, 2)}`);
  });
});

router.get('/:id', (req, res) => {
  Cake.findById(req.params.id, (err, doc) => {
    if(!err) { res.send(doc); return; }
    return res.send(`Error getting cake: ${JSON.stringify(err, undefined, 2)}`);
  });
});

router.delete('/:id', (req, res) => {
  Cake.findByIdAndDelete(req.params.id, (err, doc) => {
    if(!err) { res.send(doc); return; }
    console.error(`Error deleting cake: ${JSON.stringify(err, undefined, 2)}`);
  });
});

module.exports = router;