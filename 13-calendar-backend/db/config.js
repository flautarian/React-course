const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected successfully")
    }
    catch(e){
        console.log(e);
        throw new Error("Error initializing DB: " + e);
    }

}

module.exports = {
    dbConnection
};