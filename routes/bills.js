var express = require('express');
var router = express.Router();

var Bill = require('../models/bill')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Bill.find(function(err, data){
    console.log(data);
    res.send(data);
  });
});

router.delete('/', function(req, res, next) {
    // console.log(Bill.find(req.body));
    Bill.find(req.body).remove(function(err,data){
      res.send(data);
    });
});

//router.delete('/:animalId', function(req, res) {
//   Bill.findByIdAndRemove(req.params.animalId, function(err, deletedAnimal){
//     res.status(err ? 400 : 200).send(err || deletedAnimal)
//   })
// })

router.post('/', function(req, res, next) {
  console.log(req.body);
  Bill.create(req.body, function(err,savedAnimal){
    res.status(err ? 400 : 200).send(err || savedAnimal);
  });
});

router.put('/:billId', function(req,res) {
  // Bill.findById(req.params.animalId, function(err, animal) {
  //   bill.isAvailable = !animal.isAvailable;
  //   animal.save(function(err, savedAnimal){
  //     res.send(savedAnimal);
  //   });
  // });
});

module.exports = router;
