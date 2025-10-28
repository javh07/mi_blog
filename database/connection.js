const mongoose = require("mongoose");

const dbConnection = async() => {   
    try {
        await mongoose.connect( "mongodb+srv://joseantoniovarela_db_user:IUEAEK25VTLl3pTp@blog.albrkm3.mongodb.net/?retryWrites=true&w=majority&appName=blog");
        console.log('Base de datos online');  
    }

    catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la base de datos");
    }   

}

module.exports = {
    dbConnection
}
