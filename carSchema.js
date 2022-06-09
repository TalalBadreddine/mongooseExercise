const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    name: String,
    description: String,

});

const carSchema = new mongoose.Schema({
    maker: String,
    model: String,
    price: Number,
    year: Number,
    body_type: String,
    sale_state: String,
    mileage: Number,
    details: {
        doors: Number,
        exteriorColor: String,
        interiorColor: String,
        driveTrainDescription: String,
        fuelDescription: String,
        engineDescription: String,
        transmission: String
    },
    location: {
        address: String,
        city: String,
        zip: Number
    },
    tags: [tagSchema]
},{ collection: 'CollectionCars' })

const CollectionCars =  mongoose.model('CollectionCars', carSchema)

module.exports = CollectionCars
