const express = require("express");
const route = express.Router();
const Rental = require("../models/rental")

route.get("", function (req, res) {
    Rental.find({}, function(err, foundRentals){
        
        res.json(foundRentals);
    })
});

route.get("/:id", function(req, res){
    const rentalId = req.params.id;

    Rental.findById(rentalId, function(err, foundRental){
        if(err){
            res.status(422).send({errors:[{title:"Rental Error!", detail:"Could not find Rental...!"}]});
        }

        res.json(foundRental);
    })
})


module.exports = route;