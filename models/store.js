var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const storeSchema = new Schema ({
    name: String,
    address: [{
        street: String,
        city: String,
        province: String,
        postalcode: String,
    }],
    hours: [{
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String,
    }],
    telephone: String,
    email: String,
    storeNum: Number,
});

/////////// used to populate database with initial data.
// const store = new Schema ({
//     name: "Antiques on Parliament",
//     address: [{
//         street: "427 Parliament Street",
//         city: "Toronto",
//         province: "Ontario",
//         postalcode: "M5A 2Z7",
//     }],
//     hours: [{
//         monday: "By Appointment",
//         tuesday: "By Appointment",
//         wednesday: "By Appointment",
//         thursday: "1100 - 1900",
//         friday: "1100 - 2000",
//         saturday: "1200 - 2000",
//         sunday: "1200 - 1800",
//     }],
//     telephone: "647-123-4567",
//     email: "contact@AOParliament.com",
//     storeNum: 001,
// });

// // store.save();
// mongoose.connection.close();

module.exports = mongoose.model("StoreModel", storeSchema);