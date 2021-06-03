const mongoose = require('mongoose')
var dbname;
mongoose.connect('mongodb://localhost:27017/Sahayyam', { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbnm) => {
    if (!err) {
        console.log('Connect to DB done!!')
        dbname = dbnm;//assign db name
        console.log(dbname.name)
    }
})
module.exports = mongoose