const { default: mongoose } = require("mongoose")

const URL = "mongodb+srv://milit3103:milit31@cluster0.lpadjl0.mongodb.net/userdatabase?retryWrites=true&w=majority"

const connection =()=>{
    mongoose.connect(URL).then(()=>{
        console.log("Connected Successfully");

    }).catch((error)=>{
        console.log("Error connecting to the database", error);
    })
}

module.exports = connection;