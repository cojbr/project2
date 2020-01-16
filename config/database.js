var mongoose = require('mongoose');

/////// inventory items database
// mongoose.connect('mongodb://localhost:27017/inventory',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     }
// );

/////// locations stores database
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);


// item.save();


// shortcut to mongoose.connection object
let db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});