const express = require("express");
const connection = require("./connection");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes")
const app = express();

connection();

app.use(express.json());
app.use(express.static("public"));
app.use("/api", userRoutes);
app.use("/api", taskRoutes);

app.listen(5000, (error) =>{
    if (error){
        console.log('Error: ', error);
    }
    else {
        console.log('Server is running on port 5000');
    }
});