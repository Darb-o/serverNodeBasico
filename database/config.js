
const mongoose = require('mongoose');

const dbConnection = async() => {

    try{
        await mongoose.connect( process.env.MONGODB );
        console.log("Base de datos online");
    }catch(err){
        console.log(err);
        throw new Error('Error inicio BD');
    }

}

module.exports = {
    dbConnection
}