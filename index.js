const mongoose = require('mongoose')
const carModel = require('./carSchema.js')
const dotenv = require('dotenv');

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;

const dbUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose.connect(dbUrl)
const db = mongoose.connection

db.once('open', async function () {
    
    console.log("conneted to db")

    try {
        // <--- Insert Exercise Solution Here -->
        console.log(results)
    }
    catch (e) {
        console.log(e.message)
    }
})



// Exercises Solution



//  <-------------------- Read -------------------->

// EX 1
// const results = await carModel.find(
//     {
//         year: { $gt: 2018}

//     },{
//         _id:1,
//         year:1
//     }
//     )


// Ex 2
// const results = await carModel.find(
//     {
//        'location.city': 'Winder',
//        price: {$lt: 20000},
//        mileage: {$lt: 30000}

//     },{
//         maker: 1,
//         model: 1
//     }
//     ).limit(5)


// Ex 3
// const results = await carModel.find(
//     {
//        'details.driveTrainDescription': 'AWD',
//        'details.exteriorColor': {$ne: 'White'}

//     },{
//         _id: 1,
//         maker: 1,
//         model: 1,
//         price: 1
//     }
//     )


// Ex 4
// const results = await carModel.find(
//     {
//        body_type: 'Sedan'

//     }
//     ).count()


// Ex 5 (all cars are accident free --- You can try it on Single Owner)
// const results = await carModel.find(
//     {
//      'tags.name':  "Accident Free"  

//     },{
//         _id: 1
//     }
//     )


// Ex 6
// const results = await carModel.find(
//     {
//      'tags.name':  "Accident Free",
//      'tags.name': "Single Owner"

//     },{
//         maker: 1,
//         model: 1
//     }
//     )




// <-------------------- Insert -------------------->

// Ex 1
// let newCarToAdd =  new carModel({
//     "maker": "Toyota",
//     "model": "Camry",
//     "price": 20590,
//     "year": 2017,
//     "body_type": "Sedan",
//     "sale_status": "Available",
//     "mileage": 63546,
//     "details":
//     {
//         "doors": 4,
//         "interiorColor": "Black Fabric",
//         "exteriorColor": "Blue",
//         "driveTrainDescription": "FWD",
//         "fuelDescription": "Gas",
//         "engineDescription": "4-Cyl, 2.5 Liter",
//         "transmission": "Auto, 6-Spd SeqShft"
//     },
//     "location":
//     {
//         "address": "1123 Cantrell Sansom Rd",
//         "city": "Blue Mound",
//         "zip": "76131"
// }, "tags":
// [
//     {
//         "name": "Accident Free",
//         "description": "Like every Carvana vehicle, this vehicle has 1/2 never been in a reported accident.",
//     }
// ], 
// })

// await newCarToAdd.save()




//  <-------------------- Update -------------------->

// Ex1
// const results = await carModel.updateMany(
//     {
//         'details.fuelDescription': 'Gas'
//     },{
//         $inc: {price: 2000}
//     }
//     )


// Ex2
// const results = await carModel.updateMany(
//     {
//         maker: 'Mercedes-Benz'
//     },{
//         maker: 'Mercedes Benz'
//     }
//     )


// Ex3 
// const results = await carModel.updateMany(
//     {
//         $and: [

//             { 'tags.name': 'Accident Free' },
//             { 'tags.name': 'Single Owner' }

//         ]
//     },{
//         $inc: { price: -1000 } 
//     }
//     )


// Ex4
// let  arrayToAdd = {name : 'Has Warranty', description : '2 years warranty'}

// const results = await carModel.updateMany(
// {
//     year: { $gt: 2015}

// },{

//    $push: {tags: arrayToAdd}

// }
// )